const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Hzh3mKCpA0W4em2YToQoRfT0ojbGMlrie7Fbuc8ZNyV5wLwL5ybdlNfHgZpInPp3jgsHQW8ce3WZMAY9HgeotJS00DN3Z6c9m')

//API

//API config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment request recived for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd",
    });

    // Ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
//http://localhost:5001/challenge-e8cae/us-central1/api