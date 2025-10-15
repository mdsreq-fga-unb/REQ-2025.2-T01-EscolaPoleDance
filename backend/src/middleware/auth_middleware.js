require('dotenv').config();
const jwt = require('jsonwebtoken');

// Validate user login
exports.isLoggedIn = (req, res, next) => {
    let token;

    // Find token within the header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {  // header has format: "Authorization: Bearer <token>"
        token = req.headers.authorization.split(' ')[1];  // Split the string to select the second half which is the token 
    }
    
    if (!token) {
        return res.status(401).json({ error: "Acesso negado. Token não encontrado." });
    }

    try {
        // Get token's payload with user info and attatch it into the user's requisition so other routes can access that info
        const decoded_payload = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded_payload;
        
        next();  // Authorize requisition and skip to next middleware 
    } catch (error) {
        console.log("Erro ao validar login: " + error);
        res.status(401).json({ error: "Acesso negado. Token inválido ou expirado." });
    }
};

// Validate if user has admin acess
exports.isAdmin = (req, res, next) => {
    if (req.user && req.user.role === "admin") {

        next();  // Authorize requisition
    } else {
        res.status(403).json({ error: "Acesso negado. Permissões insuficientes." });
    }
    
};

