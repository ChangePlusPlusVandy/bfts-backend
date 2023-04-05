const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const dotenv = require('dotenv');
const serviceAccount = require('./serviceAccountKey.json');

dotenv.config({
	path: '../config.env',
});

const firebaseConfig = {
	credential: cert(serviceAccount),
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

module.exports = auth;
