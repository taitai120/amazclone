const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KATYrCAD1P8DIkpDkqVTqdBd68SbINqr4dT84UJ3JKo627h6RTcfZvybYXM0X5JHGlwVPQjRvv3j1mSYY7RRQPl00yyDi3duQ"
);

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("total", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //   Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen commmand
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/taitai-amaz-clone/us-central1/api
