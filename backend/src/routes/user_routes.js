require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userController = require('../controllers/user_controllers');
const db = require('../models');
const { isLoggedIn, isAdmin } = require('../middleware/auth_middleware');

// GET /api/users/login - User login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(401).json({ error: "Preencha todos os campos." });
        }

        // Check if user with provided email exists 
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

// POST /api/users/register - Register new user
router.post('/register', async (req, res) => {
    try {

        // Debug
        console.log('Headers recebidos: ', req.headers);
        console.log('Body recebido:', req.body);
        console.log('Content-Type:', req.get('content-type'));

        const { firstName, lastName, email, password, phoneNumber, cpf } = req.body

        // Validade received data
        if (!firstName || !lastName || !email || !password || !cpf) {
            return res.status(400).json({
                error: "Por favor, preencha todos os campos obrigatórios."
            });
        };

        // Generate salt and hashed password
        const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert new user in database
        const newUser = await db.User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,  // Stores only the hashed password
            phoneNumber: phoneNumber,
            cpf: cpf
        });     
        
        // Login user into new account
        const payload = {
            id: newUser.id,
            role: newUser.role
        }

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
        );

        // Send user login token and user info
        res.status(200).json({
            token,
            user: {
                id: newUser.id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                phoneNumber: newUser.phoneNumber,
                role: newUser.role,
                createdAt: newUser.createdAt
            }
        })

        // TODO: Frontend has to redirect user to user main page ('/') carrying new headers
        // Cannot redirect at backend side because a response has already been sent

    // Error treatment
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ error: "Este email ou CPF já está cadastrado." });
        }
        else if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ error: "Email inválido." });
        }

        console.log("Erro ao cadastrar usuario: " + error);
        res.status(500).json({ error: "Ocorreu um erro interno ao cadastrar o usuário." });
    }
    
});

// USER CONTROLLERS -------------------------------

// GET /api/users/:id - Get a specific user by id
router.get('/:id', isLoggedIn, userController.getUserById);

// PUT /api/users/:id/update - Update existing user
router.put('/updateUser/:id', isLoggedIn, userController.updateUser);

// --------------------------------------------------

module.exports = router;