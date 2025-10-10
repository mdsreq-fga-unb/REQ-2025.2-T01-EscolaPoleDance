const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/schedule_controllers');

// SCHEDULE CONTROLLERS ----------------------------------

// GET /api/schedules - Listar todos os schedules
router.get('/', scheduleController.getAllSchedules);

// POST /api/schedules - Criar novo schedule
router.post('/createSchedule', scheduleController.createSchedule);

// GET /api/schedules/:id - Buscar schedule por ID
router.get('/:id', scheduleController.getScheduleById);

// PUT /api/schedules/:id - Atualizar schedule
router.put('/updateSchedule/:id', scheduleController.updateSchedule);

// DELETE /api/schedules/:id - Deletar schedule
router.delete('/:id/delete', scheduleController.deleteSchedule);

// -------------------------------------------------------

module.exports = router;