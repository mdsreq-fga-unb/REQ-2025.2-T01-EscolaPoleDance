require('dotenv').config();
const db = require('../models');
const bcrypt = require('bcrypt');
 
// POST /api/users/createUser - Create new user 

exports.createUser = async (req, res) => {
    try {

        // Debug
        console.log('Headers recebidos:', req.headers);
        console.log('Body recebido:', req.body);
        console.log('Content-Type:', req.get('content-type'));     

        const { firstName, lastName, email, password, phoneNumber, role, level } = req.body
        
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
            level: level
        });
    
        // Response with sucessfully created user
        res.status(201).json({
            id: newUser.id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            role: newUser.role,
            level: newUser.level,
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

};

// GET /api/users/ - List every user in database

exports.getAllUsers = async (req, res) => {
    try {

        const allUsers = await db.User.findAll({
            order: ['firstName'],
            attributes: { exclude: ['password'] }
        });

        res.status(200).json(allUsers);
        
    } catch (error) {
        console.error("Erro ao listar usuários: " + error);
        res.status(500).json({ error: 'Ocorreu um erro interno ao listar usuários cadastrados.'});
    }
    
    
};

// GET /api/users/:id - Get a specific user by id

exports.getUserById = async (req, res) => {
    try {

        const { id } = req.params;
        const selectedUser = await db.User.findByPk(id); 

        if (!selectedUser) {
            res.status(404).json({ error: `Não foi possível encontrar o usuário com id: '${id}'` });
        }

        res.status(200).json(selectedUser);        
        
    } catch (error) {
        console.error("Erro ao buscar usuário: " + error);
        res.status(500).json({ error: "Ocorreu um erro interno ao buscar o usuário." });
    }  
    
};

// PUT /api/users/:id/update - Update existing user

exports.updateUser = async (req, res) => {
    try {

         // Debug
        console.log('Headers recebidos:', req.headers);
        console.log('Body recebido:', req.body);
        console.log('Content-Type:', req.get('content-type')); 
        
        const { id } = req.params;
        const { firstName, lastName, email, password, phoneNumber, role, level, status, expires } = req.body;
        
        const selectedUser = await db.User.findByPk(id);
        
        if (!selectedUser) {
            res.status(404).json({ error: `Usuário com id '${id}' não foi encontrado.` })
        }

        const updateData = {};

        if (password) {
            const saltRounds = process.env.SALT_ROUNDS;
            updateData.password = await bcrypt.hash(password, saltRounds);
            
        }

        // Store data sent to update the user in order to update ONLY necessary data
        if (firstName) updateData.firstName = firstName;
        if (lastName) updateData.lastName = lastName;
        if (email) updateData.email = email;
        if (phoneNumber) updateData.phoneNumber = phoneNumber;
        if (role) updateData.role = role;
        if (level) updateData.level = level;
        if (status) updateData.status = status;
        if (expires) updateData.expires = expires;

        await selectedUser.update(updateData);

        // Send successfully updated user json data
        res.status(200).json({
            id: selectedUser.id,
            firstName: selectedUser.firstName,
            lastName: selectedUser.lastName,
            email: selectedUser.email,
            phoneNumber: selectedUser.phoneNumber,
            role: selectedUser.role,
            level: selectedUser.level,
            status: selectedUser.status,
            expires: selectedUser.expires,
            createdAt: selectedUser.createdAt
        })
        
    } catch (error) {
        console.error("Erro ao atualizar dados do usuário: " + error);
        res.status(500).json({ error: 'Ocorreu um erro interno ao tentar atualizar os dados do usuário.' });
    }
    
};

// DELETE /api/users/:id/delete - Delete a user from database

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const selectedUser = await db.User.findByPk(id);

        if (!selectedUser) {
            res.status(404).json({ error: `Não foi possível encontrar o usuário com id: '${id}'` });
        }

        await selectedUser.destroy();


        res.status(204).send();
           
    } catch (error) {
        console.error("Erro ao deletar usuário: " + error);
        res.status(500).json({ error: 'Ocorreu um erro interno ao tentar deletar o usuário' });
    }
    
};
