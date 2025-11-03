const express = require('express');
const router = express.Router();
const { initiatePayment } = require('../controllers/payment_controller');

// Rota para iniciar um novo pagamento
router.post('/payments/initiate', initiatePayment);

module.exports = router;