const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controllers');

router.get('/login', (req, res) => {
    res.send("Pagina de login");
})

// USER CONTROLLERS -------------------------------
 
// POST /api/users/createUser - Create new user 
router.post('/createUser', userController.createUser);

// GET /api/users/ - List every user in database
router.get('/', userController.getAllUsers);

// GET /api/users/:id - Get a specific user by id
router.get('/:id', userController.getUserById);

// PUT /api/users/:id/update - Update existing user
router.put('/updateUser/:id', userController.updateUser);

// DELETE /api/users/:id/delete - Delete a user from database
router.delete('/:id/delete', userController.deleteUser);

// --------------------------------------------------

module.exports = router;