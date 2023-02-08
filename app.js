const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const VerifyToken = require('./firebase-express-auth/VerifyToken');

dotenv.config({
	path: './config.env',
});

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
const dbURL = process.env.DATABASE_URL;

mongoose.connect(dbURL);
const database = mongoose.connection;

database.on('error', error => {
	console.log(error);
});

database.once('connected', () => {
	console.log('Database Connected');
});

app.get('/', (req, res) => {
	res.send('Express Auth Temp!');
});

// app.use('/data')//, VerifyToken, require('./firebase-express-auth/dataRoute'));

// Routers
// app.use('/messages', require('./routes/messages.router.js'));
app.use('/volunteers', require('./routes/volunteers.router.js'));
app.use('/clients', require('./routes/clients.router.js'));
// app.use('/resources', require('./routes/resources.router.js'));
// app.use('/posts', require('./routes/posts.router.js'));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
