// backend/src/controllers/payment_controller.js

const { createSumUpCheckout } = require('../services/sumup');

// Função para iniciar o processo de pagamento
async function initiatePayment(req, res) {
    try {
        // Validação básica dos dados de entrada
        const { amount, currency, reference } = req.body;

        if (!amount || !currency || !reference) {
            return res.status(400).json({ error: 'Parâmetros ausentes: amount, currency e reference são obrigatórios.' });
        }

        // 1. Cria o checkout na SumUp
        const checkoutId = await createSumUpCheckout(amount, currency, reference);

        // 2. Constrói a URL de redirecionamento para o Hosted Checkout (Opção A)
        const hostedCheckoutUrl = `https://me.sumup.com/checkout/${checkoutId}`;

        // 3. Retorna o ID e a URL para o frontend
        return res.status(201).json({
            checkoutId: checkoutId,
            hostedCheckoutUrl: hostedCheckoutUrl,
            message: 'Checkout criado com sucesso. Redirecione o usuário para a URL.'
        });

    } catch (error) {
        console.error('Erro no controlador de pagamento:', error.message);
        return res.status(500).json({ error: 'Falha ao iniciar o pagamento.', details: error.message });
    }
}

module.exports = {
    initiatePayment
};