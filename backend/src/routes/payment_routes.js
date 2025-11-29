const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment_controllers');

router.post('/create-preference', paymentController.createPaymentPreference);

router.post('/webhook', paymentController.paymentWebhook);

router.get('/info/:payment_id', paymentController.getPaymentInfo);

module.exports = router;
