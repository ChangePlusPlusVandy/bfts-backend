const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const VerifyToken = require('./firebase-express-auth/VerifyToken');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/data', VerifyToken, require('./firebase-express-auth/dataRoute'));

app.get('/', (req, res) => {
	res.send('Express Auth Temp!');
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
