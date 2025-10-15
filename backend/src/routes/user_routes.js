require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const userController = require('../controllers/user_controllers');
const db = require('../models');

// GET /api/users/login - User login
router.get('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!user || !password) {
            res.status(401).json({ error: "Preencha todos os campos." });
        }

        // Check if user with privded email exists 
        const user = await db.User.findOne({
            where: { email: email }
        });

        if (!user) {
            return res.status(401).json({ error: "Credenciais inválidas." });
        }
        
        // Compare user provided password with stored hashed password to verify user identity
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ error: "Credenciais inválidas" });
        }

        // Generate token with user info. This token will be used to validade if the user is logged in and their role/permissions
        const payload = {
            id: user.id,
            role: user.role
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
        );

        // Send user login token and user info
        res.status(200).json({
            token,
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                role: user.role
            }
        });

    } catch (error) {
        console.log("Erro ao gerar token de login: " + error);
        res.status(500).json({ error: "Ocorreu um erro interno ao efetuar o login." });
    }
    
});



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