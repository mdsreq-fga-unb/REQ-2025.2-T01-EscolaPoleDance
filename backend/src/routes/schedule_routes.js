const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/schedule_controllers');

// SCHEDULE CONTROLLERS ----------------------------------

// POST /api/schedules/createSchedule - Create new schedule
router.post('/createSchedule', scheduleController.createSchedule);

// GET /api/schedules/ - List all schedules
router.get('/', scheduleController.getAllSchedules);

// GET /api/schedules/:id - Find schedule by ID
router.get('/:id', scheduleController.getScheduleById);

// PUT /api/schedules/:id/update - Update existing schedule info
router.put('/updateSchedule/:id', scheduleController.updateSchedule);

// DELETE /api/schedules/:id/delete - Delete schedule
router.delete('/:id/delete', scheduleController.deleteSchedule);

// -------------------------------------------------------

module.exports = router;