const db = require('../models');

// POST 
exports.createPackage = async (req, res) => {
    try {

        // Debug
        console.log('Headers recebidos:', req.headers);
        console.log('Body recebido:', req.body);
        console.log('Content-Type:', req.get('content-type'));

        const { name, description, price, discount, installments, classCredits, status } = req.body;

        if (!name || !price || !installments) {
            return res.status(400).json({
                error: 'Por favor preencha todos os campos obrigatórios'
            });
        }

        const newPackage = await db.Package.create({
            name: name,
            description: description,
            price: price,
            discount: discount,
            installments: installments,
            classCredits: classCredits,
            status: status
        });

        res.status(201).json({
            id: newPackage.id,
            name: newPackage.name,
            description: newPackage.description,
            price: newPackage.price,
            discount: newPackage.discount,
            installments: newPackage.installments,
            classCredits: newPackage.classCredits,
            status: newPackage.status,
            createdAt: newPackage.createdAt
        });
        
    } catch (error) {
        console.error('Erro ao criar pacote: ' + error);
        res.status(500).json({ error: 'Ocorreu um erro interno ao criar o pacote' });

    }
};

// GET
exports.getAllPackages = async (req, res) => {
    try{
        const allPackages = await db.Package.findAll({
            order: ['name']
        })

        res.status(200).json(allPackages);
        
    } catch (error) {
        console.error('Erro ao listar todos os pacotes: ' + error);
        res.status(500).json({ error: 'Ocorreu um erro interno ao listar pacotes' });
        
    }
}

// GET
exports.getPackageById = async (req, res) => {
    try {
        const { id } = req.params;

        const selectedPackage = db.Package.findByPk(id);

        if (!selectedPackage) {
            return res.status(404).json({ error: `Não foi possível encontrar pacote com id ${id}` });
        }

        res.status(200).json(selectedPackage);
        
    } catch (error) {
        console.error('Erro ao buscar pacote: ' + error);
        res.status(500).json({ error: 'Erro interno ao buscar pacote' });
        
    }
    
}

// GET
exports.getPackageByUserId = async (req, res) => {
    try{
        const { userId } = req.params;
        
        const selectedUser = await db.User.findByPk(userId);

        if (!selectedUser) {
            res.status(404).json({ error: `Usuário com id '${id}' não encontrado.` });
        }

        const packageId = selectedUser.packageId;

        const userPackage = await db.Package.findByPk(packageId);

        if (!userPackage) {
            res.status(404).json({ error: `Pacote com id '${packageId}' não encontrado.` });
        }

        return res.status(200).json(userPackage);
        
    } catch (error) {
        console.error('Erro ao econtrar pacote: ' + error);
        return res.status(500).json({ error: 'Ocorreu um erro interno ao buscar pacote.' });
        
    }
    
};

// PUT
exports.updatePackage = async (req, res) => {
    try{

        // Debug
        console.log('Headers recebidos:', req.headers);
        console.log('Body recebido:', req.body);
        console.log('Content-Type:', req.get('content-type'));

        const { id } = req.params;
        const { name, description, price, discount, installments, classCredits, status } = req.body;
        
        const selectedPackage = await db.Package.findByPk(id);

        if (!selectedPackage) {
            res.status(404).json({ error: `Não foi possível encontrar pacote com o id: ${id}`});
        }

        const updateData = {};

        if (name) updateData.name = name;
        if (description) updateData.description = description;
        if (price) updateData.price = price;
        if (discount) updateData.discount = discount;
        if (installments) updateData.installments = installments;
        if (classCredits) updateData.classCredits = classCredits;
        if (status) updateData.status = status;

        await selectedPackage.update(updateData);

        // Send successfully updated item's json data

        res.status(201).json({
            id: selectedPackage.id,
            name: selectedPackage.name,
            description: selectedPackage.description,
            price: selectedPackage.price,
            discount: selectedPackage.discount,
            installments: selectedPackage.installments,
            classCredits: selectedPackage.classCredits,
            status: selectedPackage.status,
            createdAt: selectedPackage.createdAt,
            updatedAt: selectedPackage.updatedAt
        });
        
    } catch (error) {
        console.error('Erro ao atualizar pacote: ' + error);
        res.status(500).json({ error: 'Ocorreu um erro interno ao atualizar o pacote.' });
        
    }
    
};

// DELETE
exports.deletePackage = async (req, res) => {
    try {
        const { id } = req.params;

        const selectedPackage = await db.Package.findByPk(id);

        if (!selectedPackage) {
            res.status(404).json({ error: `Não foi possível encontrar pacote com o id: ${id}`});
        }

        await selectedPackage.destroy();

        res.status(204).send();
        
    } catch (error) {
        console.error('Erro ao deletar pacote: ' + error);
        res.status(500).json({ error: 'Ocorreu um erro interno ao deletar pacote.' });
        
    }
    
};