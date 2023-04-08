const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const dotenv = require('dotenv');
dotenv.config();

const private_key = JSON.parse(process.env.PRIVATE_KEY)

const serviceAccount = {
	"type": process.env.TYPE,
	"project_id": process.env.PROJECT_ID,
	"private_key_id": process.env.PROJECT_KEY_ID,
	"private_key": private_key.private_key,
	"client_email": process.env.CLIENT_EMAIL,
	"client_id": process.env.CLIENT_ID,
	"auth_uri": process.env.AUTH_URI,
	"token_uri": process.env.TOKEN_URI,
	"auth_provider_x509_cert_url": process.env.AUTH_PROVIDER,
	"client_x509_cert_url": process.env.CLIENT_CERT
}


dotenv.config({
	path: '../config.env',
});

const firebaseConfig = {
	credential: cert(serviceAccount),
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

module.exports = auth;
