const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/schedule_controllers');
const { isLoggedIn, isAdmin } = require('../middleware/auth_middleware');

// SCHEDULE CONTROLLERS ----------------------------------

// POST /api/schedules/createSchedule - Create new schedule
router.post('/createSchedule', isLoggedIn, isAdmin, scheduleController.createSchedule);

// GET /api/schedules/ - List all schedules
router.get('/', scheduleController.getAllSchedules);

// GET /api/schedules/:id - Find schedule by ID
router.get('/:id', scheduleController.getScheduleById);

// PUT /api/schedules/:id/update - Update existing schedule info
router.put('/updateSchedule/:id', isLoggedIn, scheduleController.updateSchedule);

// DELETE /api/schedules/:id/delete - Delete schedule
router.delete('/:id/delete', isLoggedIn, isAdmin, scheduleController.deleteSchedule);

// -------------------------------------------------------

module.exports = router;