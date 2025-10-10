const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controllers');

router.get('/login', (req, res) => {
    res.send("Pagina de login");
})

// USER CONTROLLERS -------------------------------
 
// POST /api/user - Create new user 
router.post('/createUser', userController.createUser);

// PUT /api/user - Update existing user
router.put('/updateUser/:id', userController.updateUser);

// GET /api/user - List every user in database
router.get('/', userController.getAllUsers);

// GET /api/user - Get a specific user by id
router.get('/:id', userController.getUserById);

// DELETE /api/user - Delete a user from database
router.delete('/:id/delete', userController.deleteUser);

// --------------------------------------------------

module.exports = router;