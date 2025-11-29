const client = require('../config/mercadopago');
const { Preference, Payment } = require('mercadopago');

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN
});

const createPaymentPreference = async (req, res) => {
  try {
    const { title, quantity, unit_price, description, payer_email } = req.body;

    const preference = {
      items: [
        {
          title: 'Meu produto',
          quantity: parseInt(quantity),
          unit_price: parseFloat(unit_price),
          currency_id: 'BRL',
          description: description
        }
      ],
      payer: {
        email: payer_email
      },
      back_urls: {
        success: `${process.env.BASE_URL}/payment/success`,
        failure: `${process.env.BASE_URL}/payment/failure`,
        pending: `${process.env.BASE_URL}/payment/pending`
      },
      auto_return: 'approved',
      notification_url: `${process.env.BASE_URL}/api/payment/webhook`
    };

    const response = await mercadopago.preferences.create(preference);

    res.status(200).json({
      id: response.body.id,
      init_point: response.body.init_point,
      sandbox_init_point: response.body.sandbox_init_point
    });
  } catch (error) {
    console.error('Erro ao criar preferência:', error);
    res.status(500).json({ error: 'Erro ao processar pagamento' });
  }
};

const paymentWebhook = async (req, res) => {
  try {
    const { type, data } = req.body;

    if (type === 'payment') {
      const paymentId = data.id;

      const payment = await mercadopago.payment.get(paymentId);

      console.log('Payment Info:', {
        id: payment.body.id,
        status: payment.body.status,
        status_detail: payment.body.status_detail,
        transaction_amount: payment.body.transaction_amount,
        payer_email: payment.body.payer.email
      });

      res.status(200).send('OK');
    } else {
      res.status(200).send('OK');
    }
  } catch (error) {
    console.error('Erro no webhook:', error);
    res.status(500).send('Error');
  }
};

const getPaymentInfo = async (req, res) => {
  try {
    const { payment_id } = req.params;

    const payment = await mercadopago.payment.get(payment_id);

    res.status(200).json({
      id: payment.body.id,
      status: payment.body.status,
      status_detail: payment.body.status_detail,
      transaction_amount: payment.body.transaction_amount,
      date_created: payment.body.date_created,
      date_approved: payment.body.date_approved
    });
  } catch (error) {
    console.error('Erro ao buscar pagamento:', error);
    res.status(500).json({ error: 'Erro ao buscar informações do pagamento' });
  }
};

module.exports = {
  createPaymentPreference,
  paymentWebhook,
  getPaymentInfo
};
