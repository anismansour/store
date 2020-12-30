const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HwxOjC4ViGagrqmpX0de7HYIV8CNiSwZjlP364Jbcw2ONkMOv3htXMWp2dkJOfP17HsCASE1am2DmF14oH2NJc600gDjw3Wf0'
);

//API

// APP CONFIG
const app = express();

//MIDDLEWARE
app.use(cors({ origin: true }));
app.use(express.json());

//API ROUTES
app.get('/', (request, response) => response.status(200).send('hello word'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('payment request received ', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//LISTEN COMMAND

exports.api = functions.https.onRequest(app);

//http://localhost:5001/online-store-anis/us-central1/api
