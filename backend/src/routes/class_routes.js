const express = require('express');
const router = express.Router();
const classController = require('../controllers/class_controllers');
const { isLoggedIn, isAdmin } = require('../middleware/auth_middleware');

// CLASS CONTROLLERS ---------------------------

// POST /api/classes/createClass - Create new class
router.post('/createClass', isLoggedIn, isAdmin, classController.createClass);

// GET /api/classes/ - List every class on the database
router.get('/', classController.getAllClasses);

// GET /api/classes/:id - Find a specified class by id
router.get('/:id', classController.getClassById);

// PUT /api/classes/:id/update - Update existing class
router.put('/updateClass/:id', isLoggedIn, classController.updateClass);

// DELETE /api/classes/:id/delete - Delete a specified class from database
router.delete('/:id/delete', isLoggedIn, isAdmin, classController.deleteClass);

// -----------------------------------------------

module.exports = router;