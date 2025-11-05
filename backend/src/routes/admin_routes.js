const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controllers');
const classController = require('../controllers/class_controllers');
const scheduleController = require('../controllers/schedule_controllers');
const bookingController = require('../controllers/booking_controllers');
const packageController = require('../controllers/package_controllers');
const { isLoggedIn, isAdmin } = require('../middleware/auth_middleware');

router.use(isLoggedIn, isAdmin);


// CONTROLLERS ---------------------------

// USERS ---
// GET /api/admin/users - list every user 
router.get('/users', userController.getAllUsers);

// POST /api/admin/createUser - creates a new user
router.post('/createUser', userController.createUser);

// DELETE /api/admin/users/:id/delete - delete a specific user
router.delete('/users/:id/delete', userController.deleteUser);

// CLASSES ---
// GET /api/admin/classes - list every class
router.get('/classes', classController.getAllClasses);

// PACKAGES ---
// POST /api/admin/packages/createPackage - creates a new package
router.post('/packages/createPackage', packageController.createPackage);

// GET /api/packages - list every package
router.get('/packages', packageController.getAllPackages);

// GET /api/packages/:id - list a specific package
router.get('/packages/:id', packageController.getPackageById);

// GET /api/packages/user/:id - list a user's package
router.get('/packages/user/:id', packageController.getPackageByUserId);

// PUT /api/packages/:id/update - update a package
router.put('/packages/:id/update', packageController.updatePackage);

// DELETE /api/packages/:id/delete - delete a package
router.delete('/packages/:id/delete', packageController.deletePackage);

// ---------------------------------------

module.exports = router;