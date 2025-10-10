const express = require('express');
const router = express.Router();
const classController = require('../controllers/class_controllers');

// CLASS CONTROLLERS ---------------------------

// POST /api/classes/createClass - Create new class
router.post('/createClass', classController.createClass);

// GET /api/classes/ - List every class on the database
router.get('/', classController.getAllClasses);

// GET /api/classes/:id - Find a specified class by id
router.get('/:id', classController.getClassById);

// PUT /api/classes/:id/update - Update existing class
router.put('/updateClass/:id', classController.updateClass);

// DELETE /api/classes/:id/delete - Delete a specified class from database
router.delete('/:id/delete', classController.deleteClass);

// -----------------------------------------------

module.exports = router;