const express = require('express');
const router = express.Router();
const db = require('../models1');

router.get('/', (req, res) => {
    res.send("Lista de turmas");
})

// CLASS CONTROLLERS ---------------------------

// POST /api/classes - Create new class

router.post('createClass', async (req, res) => {
    try {

         // Debug
        console.log('Headers recebidos:', req.headers);
        console.log('Body recebido:', req.body);
        console.log('Content-Type:', req.get('content-type'));     

        const { level, maxStudents, status } = req.body;

        if (!level || !maxStudents || !status) {
            return res.status(400).json({
                error: "Por favor, preencha todosos campos obrigatórios."
            });
        }

        const newClass = await db.Class.create({
            level: level,
            maxStudents: maxStudents,
            status: status
        });

        res.status(201).json({
            id: newClass.id,
            level: newClass.level,
            maxStudents: newClass.maxStudents,
            status: newClass.status,
            createdAt: newClass.createdAt
        });        
        
    } catch (error) {
        console.error("Erro ao criar turma: " + error);
        res.status(500).json({ error: "Ocorreu um erro interno ao criar a turma." });

    }
    
});


// PUT /api/classes - Update existing class

router.put('/updateClass/:id', async (req, res) => {
    try {

         // Debug
        console.log('Headers recebidos:', req.headers);
        console.log('Body recebido:', req.body);
        console.log('Content-Type:', req.get('content-type')); 

        const { id } = req.params;
        const { level, maxStudents, status, enrolledStudents } = req.body;

        const selectedClass = await db.Class.findByPk(id);
        
        if (!selectedClass) {
            res.status(404).json({ error: `Turma com id '${id}' não foi encontrada.`});
        }

        const updateData = {}

        if (level) updateData.level = level;
        if (maxStudents) updateData.maxStudents = maxStudents;
        if (status) updateData.status = status;
        if (enrolledStudents) updateData.enrolledStudents = enrolledStudents;

        await selectedClass.update(updateData);

        // Send successfully updated item's json data

        res.status(201).json({
            id: selectedClass.id,
            level: selectedClass.level,
            maxStudents: selectedClass.maxStudents,
            status: selectedClass.status,
            enrolledStudents: selectedClass.enrolledStudents,
            createdAt: selectedClass.createdAt
        });
        
    } catch (error) {
        console.error("Erro ao atualizar dados da turma: " + error);
        res.status(500).json({ error: "Ocorreu um erro interno ao tentar atualizar dados da turma."});
    }
     
});

// GET /api/classes - List every class on the database

router.get('/classes/', async (req, res) => {
    try {
        const allClasses = await db.Class.findAll({
            order: ['level', 'ASC']
        })

        res.status(200).json(allClasses);       
        
    } catch (error) {
        console.error("Erro ao listar turmas: " + error);
        res.status(500).json({ error: "Ocorreu um erro interno ao listar turmas cadastradas." });
    }
    
});

// GET /api/classes - Find a specified class by id

router.get('/classes/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const selectedClass = await db.Class.findByPk(id);

        if (!selectedClass) {
            res.status(404).json({ error: `Não foi possível encontrar a turma com id: '${id}'` });
        }

        res.status(200).json(selectedClass);
        
    } catch (error) {
        console.error("Erro ao buscar turma: " + error);
        res.status(500).json({ error: 'Ocorreu um erro interno ao buscar a turma.' });
    }
    
});

// DELETE /api/classes - Delete a specified class from database

router.delete('/removeClass/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const selectedClass = await db.Class.findByPk(id);
        
        if (!selectedClass) {
            res.status(404).json({ error: `Não foi possível encontrar a turma com id: '${id}'` });
        }

        await selectedClass.destroy();

        res.status(204).send();        
        
    } catch (error) {
        console.error("Erro ao deletar turma: " + error);
        res.status(500).json({ error: "Ocorreu um erro interno ao tentar deletar turma." });
    }
    
});

module.exports = router;