// backend/src/services/sumup.js

const axios = require('axios');

// Carrega as variáveis de ambiente
const SUMUP_API_KEY = process.env.SUMUP_API_KEY;
const SUMUP_MERCHANT_CODE = process.env.SUMUP_MERCHANT_CODE;
const SUMUP_API_URL = 'https://api.sumup.com/v0.1';

/**
 * Cria um novo recurso de checkout na SumUp.
 * @param {number} amount - O valor do pagamento.
 * @param {string} currency - A moeda (ex: "BRL").
 * @param {string} reference - Uma referência única para o checkout.
 * @returns {Promise<string>} O ID do checkout criado.
 */
async function createSumUpCheckout(amount, currency, reference) {
    const url = `${SUMUP_API_URL}/checkouts`;
    
    const payload = {
        checkout_reference: reference,
        amount: amount,
        currency: currency,
        merchant_code: SUMUP_MERCHANT_CODE,
        description: `Pagamento para o SaaS - Ref: ${reference}`
    };

    try {
        const response = await axios.post(url, payload, {
            headers: {
                'Authorization': `Bearer ${SUMUP_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data.id; // Retorna o ID do checkout
    } catch (error) {
        // Lançar um erro mais limpo para ser tratado pelo controlador
        throw new Error(`SumUp API Error: ${error.response?.data?.message || error.message}`);
    }
}

// ... (outras funções como getCheckoutStatus)

module.exports = {
    createSumUpCheckout,
    // ...
};