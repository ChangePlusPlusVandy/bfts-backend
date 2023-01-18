const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

// Routers
app.use('/messages', require('./routes/messages.router.js'));

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
