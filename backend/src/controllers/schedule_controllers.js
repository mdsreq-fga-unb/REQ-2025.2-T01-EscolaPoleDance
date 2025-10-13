const db = require('../models');

// POST /api/schedules/createSchedule - Create new schedule

exports.createSchedule = async (req, res) => {
    try {
        // DEBUG LOGS
        console.log('Headers recebidos:', req.headers);
        console.log('Body recebido:', req.body);
        console.log('Content-Type:', req.get('content-type'));
        
        const { classId, dayOfWeek, startTime, endTime } = req.body;
        
        console.log('Dados extraídos:', { classId, dayOfWeek, startTime, endTime });

        // Basic Validation
        if (!classId || !dayOfWeek || !startTime || !endTime) {
            return res.status(400).json({ 
                error: 'Todos os campos são obrigatórios: classId, dayOfWeek, startTime, endTime' 
            });
        }

        // Verify if class exists
        const classExists = await db.Class.findByPk(classId);
        if (!classExists) {
            // Search available classes to show on error
            const availableClasses = await db.Class.findAll({
                attributes: ['id', 'name'],
                limit: 5
            });
            
            return res.status(404).json({ 
                error: `Classe com ID ${classId} não encontrada`,
                availableClasses: availableClasses.length > 0 ? availableClasses : 'Nenhuma classe cadastrada'
            });
        }

        const newSchedule = await db.Schedule.create({
            classId,
            dayOfWeek,
            startTime,
            endTime
        });

        return res.status(201).json(newSchedule);
    } catch (error) {
        console.error('Erro ao criar schedule:', error);
        return res.status(500).json({ 
            error: 'Erro interno do servidor',
            details: error.message 
        });
    }
};

// GET /api/schedules/ - List all schedules

exports.getAllSchedules = async (req, res) => {
    try {
        const schedules = await db.Schedule.findAll({
            order: [['dayOfWeek', 'ASC'], ['startTime', 'ASC']]
        });

        return res.status(200).json(schedules);
    } catch (error) {
        console.error('Erro ao buscar schedules:', error);
        return res.status(500).json({ 
            error: 'Erro interno do servidor',
            details: error.message 
        });
    }
};

// GET /api/schedules/:id - Find schedule by id

exports.getScheduleById = async (req, res) => {
    try {
        const { id } = req.params;
        
        const schedule = await db.Schedule.findByPk(id);

        if (!schedule) {
            return res.status(404).json({ error: 'Schedule não encontrado' });
        }

        return res.status(200).json(schedule);
    } catch (error) {
        console.error('Erro ao buscar schedule:', error);
        return res.status(500).json({ 
            error: 'Erro interno do servidor',
            details: error.message 
        });
    }
};

// PUT /api/schedules/:id/update - Update Schedule info

exports.updateSchedule = async (req, res) => {
    try {
        const { id } = req.params;
        const { classId, dayOfWeek, startTime, endTime } = req.body;

        const schedule = await db.Schedule.findByPk(id);
        if (!schedule) {
            return res.status(404).json({ error: 'Schedule não encontrado' });
        }

        await schedule.update({
            classId: classId || schedule.classId,
            dayOfWeek: dayOfWeek || schedule.dayOfWeek,
            startTime: startTime || schedule.startTime,
            endTime: endTime || schedule.endTime
        });

        return res.status(200).json(schedule);
    } catch (error) {
        console.error('Erro ao atualizar schedule:', error);
        return res.status(500).json({ 
            error: 'Erro interno do servidor',
            details: error.message 
        });
    }
};

// DELETE /api/schedules/:id/delete - Delete schedule

exports.deleteSchedule = async (req, res) => {
    try {
        const { id } = req.params;

        const schedule = await db.Schedule.findByPk(id);
        if (!schedule) {
            return res.status(404).json({ error: 'Schedule não encontrado' });
        }

        await schedule.destroy();

        return res.status(204).send();
    } catch (error) {
        console.error('Erro ao deletar schedule:', error);
        return res.status(500).json({ 
            error: 'Erro interno do servidor',
            details: error.message 
        });
    }
};
