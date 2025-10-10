const express = require('express');
const router = express.Router();
const classController = require('../controllers/class_controllers');

// CLASS CONTROLLERS ---------------------------

// POST /api/classes - Create new class
router.post('/createClass', classController.createClass);

// PUT /api/classes - Update existing class
router.put('/updateClass/:id', classController.updateClass);

// GET /api/classes - List every class on the database
router.get('/', classController.getAllClasses);

// GET /api/classes - Find a specified class by id
router.get('/:id', classController.getClassById);

// DELETE /api/classes - Delete a specified class from database
router.delete('/:id/delete', classController.deleteClass);

// -----------------------------------------------

module.exports = router;