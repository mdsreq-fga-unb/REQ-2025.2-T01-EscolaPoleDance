const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking_controllers');

// BOOKING CONTROLLERS -----------------------------

// POST /api/bookings/createBooking - Create new booking
router.post('/createBooking', bookingController.createBooking);

// GET /api/bookings/ - List all bookings
router.get('/', bookingController.getAllBookings);

// GET /api/bookings/:id - Get booking by ID
router.get('/:id', bookingController.getBookingById);

// GET /api/bookings/user/:userId - Get all bookings for a specific user
router.get('/user/:userId', bookingController.getBookingByUserId);

// GET /api/bookings/schedule/:scheduleId - Get all bookings for a specific schedule
router.get('/schedule/:scheduleId', bookingController.getBookingByScheduleId);

// GET /api/bookings/class/:classId - Get all bookings for a specific class
router.get('/class/:classId', bookingController.getBookingByClassId);

// GET /api/bookings/date/:date - Get all bookings for a specific date
router.get('/date/:date', bookingController.getBookingByDate);

// PUT /api/bookings/:id/update - Update booking
router.put('/updateBooking/:id', bookingController.updateBooking);

// PATCH /api/bookings/:id/cancel - Cancel a booking
router.patch('/:id/cancel', bookingController.cancelBooking);

// PATCH /api/bookings/:id/complete - Mark booking as completed
router.patch('/:id/complete', bookingController.completeBooking);

// DELETE /api/bookings/:id/delete - Delete booking (hard delete)
router.delete('/:id/delete', bookingController.deleteBooking);

// -------------------------------------------------

module.exports = router;