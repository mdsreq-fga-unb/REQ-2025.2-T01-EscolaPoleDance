const router = express.Router();
const db = require('../models');

// GET /api/bookings - List all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await db.Booking.findAll({
            include: [
                {
                    model: db.User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber']
                },
                {
                    model: db.Class,
                    as: 'class',
                    attributes: ['id', 'level', 'maxStudents', 'enrolledStudents', 'status']
                },
                {
                    model: db.Schedule,
                    as: 'schedules',
                    attributes: ['id', 'dayOfWeek', 'startTime', 'endTime']
                }
            ],
            order: [['bookingDate', 'DESC'], ['createdAt', 'DESC']]
        });
        return res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
});

// GET /api/bookings/:id - Get booking by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const booking = await db.Booking.findByPk(id, {
            include: [
                {
                    model: db.User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber']
                },
                {
                    model: db.Class,
                    as: 'class',
                    attributes: ['id', 'level', 'maxStudents', 'enrolledStudents', 'status']
                },
                {
                    model: db.Schedule,
                    as: 'schedules',
                    attributes: ['id', 'dayOfWeek', 'startTime', 'endTime']
                }
            ]
        });

        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        return res.status(200).json(booking);
    } catch (error) {
        console.error('Error fetching booking:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
});

// POST /api/bookings - Create new booking
router.post('/', async (req, res) => {
    try {
        const { userId, classId, scheduleId, bookingDate, status } = req.body;

        console.log('Received booking data:', { userId, classId, scheduleId, bookingDate, status });

        // Basic validation
        if (!userId || !classId || !scheduleId || !bookingDate) {
            return res.status(400).json({ 
                error: 'Required fields: userId, classId, scheduleId, bookingDate' 
            });
        }

        // Validate date format (YYYY-MM-DD)
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(bookingDate)) {
            return res.status(400).json({ 
                error: 'Invalid date format. Use YYYY-MM-DD (e.g., 2025-10-05)' 
            });
        }

        // Check if user exists
        const user = await db.User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ 
                error: `User with ID ${userId} not found`
            });
        }

        // Check if user is active
        if (user.status !== 'active') {
            return res.status(403).json({ 
                error: 'User account is not active. Cannot create booking.' 
            });
        }

        // Check if class exists
        const classItem = await db.Class.findByPk(classId);
        if (!classItem) {
            return res.status(404).json({ 
                error: `Class with ID ${classId} not found`
            });
        }

        // Check if class is available
        if (classItem.status === 'inactive') {
            return res.status(400).json({ 
                error: 'This class is currently inactive' 
            });
        }

        if (classItem.status === 'full') {
            return res.status(400).json({ 
                error: 'This class is currently full' 
            });
        }

        // Check if there are available spots
        if (classItem.enrolledStudents >= classItem.maxStudents) {
            return res.status(400).json({ 
                error: 'This class has reached maximum capacity' 
            });
        }

        // Check if schedule exists
        const schedule = await db.Schedule.findByPk(scheduleId);
        if (!schedule) {
            return res.status(404).json({ 
                error: `Schedule with ID ${scheduleId} not found`
            });
        }

        // Verify that the schedule belongs to the class
        if (schedule.classId !== classId) {
            return res.status(400).json({ 
                error: 'The selected schedule does not belong to the selected class' 
            });
        }

        // Check if user already has a booking for this schedule on this date
        const existingBooking = await db.Booking.findOne({
            where: {
                userId,
                scheduleId,
                bookingDate,
                status: {
                    [db.Sequelize.Op.ne]: 'canceled'
                }
            }
        });

        if (existingBooking) {
            return res.status(409).json({ 
                error: 'User already has an active booking for this schedule on this date' 
            });
        }

        // Create the booking
        const newBooking = await db.Booking.create({
            userId,
            classId,
            scheduleId,
            bookingDate,
            status: status || 'scheduled'
        });

        // Update enrolled students count
        await classItem.update({
            enrolledStudents: classItem.enrolledStudents + 1
        });

        // Check if class is now full
        if (classItem.enrolledStudents + 1 >= classItem.maxStudents) {
            await classItem.update({ status: 'full' });
        }

        // Fetch the created booking with associations
        const createdBooking = await db.Booking.findByPk(newBooking.id, {
            include: [
                {
                    model: db.User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'email']
                },
                {
                    model: db.Class,
                    as: 'class'
                },
                {
                    model: db.Schedule,
                    as: 'schedules'
                }
            ]
        });

        return res.status(201).json(createdBooking);
    } catch (error) {
        console.error('Error creating booking:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
});

// PUT /api/bookings/:id - Update booking
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, classId, scheduleId, bookingDate, status } = req.body;

        const booking = await db.Booking.findByPk(id);
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        const oldClassId = booking.classId;

        // Validate new user if provided
        if (userId && userId !== booking.userId) {
            const userExists = await db.User.findByPk(userId);
            if (!userExists) {
                return res.status(404).json({ error: 'User not found' });
            }
            if (userExists.status !== 'active') {
                return res.status(403).json({ error: 'User account is not active' });
            }
        }

        // Validate new class if provided
        if (classId && classId !== booking.classId) {
            const classExists = await db.Class.findByPk(classId);
            if (!classExists) {
                return res.status(404).json({ error: 'Class not found' });
            }
            if (classExists.status === 'inactive') {
                return res.status(400).json({ error: 'Class is inactive' });
            }
        }

        // Validate new schedule if provided
        if (scheduleId && scheduleId !== booking.scheduleId) {
            const scheduleExists = await db.Schedule.findByPk(scheduleId);
            if (!scheduleExists) {
                return res.status(404).json({ error: 'Schedule not found' });
            }
        }

        // Validate status if provided
        if (status && !['scheduled', 'completed', 'canceled'].includes(status)) {
            return res.status(400).json({ 
                error: 'Invalid status. Must be: scheduled, completed, or canceled' 
            });
        }

        // Validate date format if provided
        if (bookingDate) {
            const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
            if (!dateRegex.test(bookingDate)) {
                return res.status(400).json({ 
                    error: 'Invalid date format. Use YYYY-MM-DD' 
                });
            }
        }

        await booking.update({
            userId: userId || booking.userId,
            classId: classId || booking.classId,
            scheduleId: scheduleId || booking.scheduleId,
            bookingDate: bookingDate || booking.bookingDate,
            status: status || booking.status
        });

        // Update enrolled students count if class changed
        if (classId && classId !== oldClassId) {
            // Decrease count in old class
            const oldClass = await db.Class.findByPk(oldClassId);
            if (oldClass && oldClass.enrolledStudents > 0) {
                await oldClass.update({
                    enrolledStudents: oldClass.enrolledStudents - 1,
                    status: oldClass.enrolledStudents - 1 < oldClass.maxStudents ? 'active' : oldClass.status
                });
            }

            // Increase count in new class
            const newClass = await db.Class.findByPk(classId);
            if (newClass) {
                await newClass.update({
                    enrolledStudents: newClass.enrolledStudents + 1
                });
                if (newClass.enrolledStudents + 1 >= newClass.maxStudents) {
                    await newClass.update({ status: 'full' });
                }
            }
        }

        // Fetch the updated booking with associations
        const updatedBooking = await db.Booking.findByPk(id, {
            include: [
                {
                    model: db.User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'email']
                },
                {
                    model: db.Class,
                    as: 'class'
                },
                {
                    model: db.Schedule,
                    as: 'schedules'
                }
            ]
        });

        return res.status(200).json(updatedBooking);
    } catch (error) {
        console.error('Error updating booking:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
});

// PATCH /api/bookings/:id/cancel - Cancel a booking
router.patch('/:id/cancel', async (req, res) => {
    try {
        const { id } = req.params;

        const booking = await db.Booking.findByPk(id);
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        if (booking.status === 'canceled') {
            return res.status(400).json({ error: 'Booking is already canceled' });
        }

        if (booking.status === 'completed') {
            return res.status(400).json({ error: 'Cannot cancel a completed booking' });
        }

        await booking.update({ status: 'canceled' });

        // Update enrolled students count
        const classItem = await db.Class.findByPk(booking.classId);
        if (classItem && classItem.enrolledStudents > 0) {
            await classItem.update({
                enrolledStudents: classItem.enrolledStudents - 1
            });

            // If class was full, change status to active
            if (classItem.status === 'full' && classItem.enrolledStudents - 1 < classItem.maxStudents) {
                await classItem.update({ status: 'active' });
            }
        }

        const canceledBooking = await db.Booking.findByPk(id, {
            include: [
                {
                    model: db.User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'email']
                },
                {
                    model: db.Class,
                    as: 'class'
                },
                {
                    model: db.Schedule,
                    as: 'schedules'
                }
            ]
        });

        return res.status(200).json(canceledBooking);
    } catch (error) {
        console.error('Error canceling booking:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
});

// PATCH /api/bookings/:id/complete - Mark booking as completed
router.patch('/:id/complete', async (req, res) => {
    try {
        const { id } = req.params;

        const booking = await db.Booking.findByPk(id);
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        if (booking.status === 'completed') {
            return res.status(400).json({ error: 'Booking is already completed' });
        }

        if (booking.status === 'canceled') {
            return res.status(400).json({ error: 'Cannot complete a canceled booking' });
        }

        await booking.update({ status: 'completed' });

        const completedBooking = await db.Booking.findByPk(id, {
            include: [
                {
                    model: db.User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'email']
                },
                {
                    model: db.Class,
                    as: 'class'
                },
                {
                    model: db.Schedule,
                    as: 'schedules'
                }
            ]
        });

        return res.status(200).json(completedBooking);
    } catch (error) {
        console.error('Error completing booking:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
});

// DELETE /api/bookings/:id - Delete booking (hard delete)
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const booking = await db.Booking.findByPk(id);
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        // Update enrolled students count if booking is not canceled
        if (booking.status !== 'canceled') {
            const classItem = await db.Class.findByPk(booking.classId);
            if (classItem && classItem.enrolledStudents > 0) {
                await classItem.update({
                    enrolledStudents: classItem.enrolledStudents - 1
                });

                if (classItem.status === 'full' && classItem.enrolledStudents - 1 < classItem.maxStudents) {
                    await classItem.update({ status: 'active' });
                }
            }
        }

        await booking.destroy();

        return res.status(204).send();
    } catch (error) {
        console.error('Error deleting booking:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
});

// GET /api/bookings/user/:userId - Get all bookings for a specific user
router.get('/user/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        const bookings = await db.Booking.findAll({
            where: { userId },
            include: [
                {
                    model: db.Class,
                    as: 'class'
                },
                {
                    model: db.Schedule,
                    as: 'schedules'
                }
            ],
            order: [['bookingDate', 'DESC'], ['createdAt', 'DESC']]
        });

        return res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching user bookings:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
});

// GET /api/bookings/schedule/:scheduleId - Get all bookings for a specific schedule
router.get('/schedule/:scheduleId', async (req, res) => {
    try {
        const { scheduleId } = req.params;

        const bookings = await db.Booking.findAll({
            where: { scheduleId },
            include: [
                {
                    model: db.User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber']
                },
                {
                    model: db.Class,
                    as: 'class'
                }
            ],
            order: [['bookingDate', 'DESC'], ['createdAt', 'DESC']]
        });

        return res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching schedule bookings:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
});

// GET /api/bookings/class/:classId - Get all bookings for a specific class
router.get('/class/:classId', async (req, res) => {
    try {
        const { classId } = req.params;

        const bookings = await db.Booking.findAll({
            where: { classId },
            include: [
                {
                    model: db.User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber']
                },
                {
                    model: db.Schedule,
                    as: 'schedules'
                }
            ],
            order: [['bookingDate', 'DESC'], ['createdAt', 'DESC']]
        });

        return res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching class bookings:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
});

// GET /api/bookings/date/:date - Get all bookings for a specific date
router.get('/date/:date', async (req, res) => {
    try {
        const { date } = req.params;

        const bookings = await db.Booking.findAll({
            where: { bookingDate: date },
            include: [
                {
                    model: db.User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber']
                },
                {
                    model: db.Class,
                    as: 'class'
                },
                {
                    model: db.Schedule,
                    as: 'schedules'
                }
            ],
            order: [['createdAt', 'DESC']]
        });

        return res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching bookings by date:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
});

module.exports = router;