const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const dotenv = require('dotenv');

const serviceAccountKey = require("./service-account-key.json");

const app = initializeApp({
  credential: cert(serviceAccountKey),
});

const auth = getAuth(app);

module.exports = auth;
