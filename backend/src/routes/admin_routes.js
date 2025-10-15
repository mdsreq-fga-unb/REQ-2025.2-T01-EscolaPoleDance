const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controllers');
const classController = require('../controllers/class_controllers');
const scheduleController = require('../controllers/schedule_controllers');
const bookingController = require('../controllers/booking_controllers');
const { isLoggedIn, isAdmin } = require('../middleware/auth_middleware');

router.use(isLoggedIn, isAdmin);


// CONTROLLERS ---------------------------

// GET /api/admin/users - list every user 
router.get('/users', userController.getAllUsers);

// GET /api/admin/classes - list every class
router.get('/classes', classController.getAllClasses);

// ---------------------------------------

module.exports = router;