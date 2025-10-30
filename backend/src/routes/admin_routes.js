const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controllers');
const classController = require('../controllers/class_controllers');
const scheduleController = require('../controllers/schedule_controllers');
const bookingController = require('../controllers/booking_controllers');
const { isLoggedIn, isAdmin } = require('../middleware/auth_middleware');

router.use(isLoggedIn, isAdmin);


// CONTROLLERS ---------------------------

// USERS ---
// GET /api/admin/users - list every user 
router.get('/users', userController.getAllUsers);

// POST /api/admin/createUser - creates a new user
router.get('/createUser', userController.createUser);

// DELETE /api/admin/users/:id/delete - delete a specific user
router.delete('/users/:id/delete', userController.deleteUser);

// CLASSES ---
// GET /api/admin/classes - list every class
router.get('/classes', classController.getAllClasses);

// ---------------------------------------

module.exports = router;