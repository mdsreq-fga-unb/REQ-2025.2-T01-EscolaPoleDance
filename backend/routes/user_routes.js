require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
    res.send("Pagina de login");
})

// USER CONTROLLERS -------------------------------

// POST /api/user - Create new user 
router.post('/createUser', async (req, res) => {
    try {

        // Debug
        console.log('Headers recebidos:', req.headers);
        console.log('Body recebido:', req.body);
        console.log('Content-Type:', req.get('content-type'));     

        const { firstName, lastName, email, password, phoneNumber, role } = req.body
        
        // Validate received data
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                error: "Por favor, preencha todos os campos obrigatórios."
            });
        }
        
        // Generate salt and hashed password
        const saltRounds = process.env.SALT_ROUNDS;  // Level of security for data criptography with bcrypt (each level doubles the time it takes to calculate hash)
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert new user in database 
        const newUser = await db.User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,  // Stores only the hashed password
            phoneNumber: phoneNumber,
            role: role,
        });
    
        // Response with sucessfully created user
        res.status(201).json({
            id: newUser.id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            role: newUser.role,
            createdAt: newUser.createdAt
        });
        
        
    // Error treatment 
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ error: "Este email já está cadastrado" });
        }
        else if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ error: "Email inválido" });
        }

        console.error("Erro ao criar usuário: " + error);
        res.status(500).json({ error: "Ocorreu um erro interno ao criar o usuário." });
    }

});

module.exports = router;