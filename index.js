const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(helmet());

const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

// Routers
app.use('/messages', require('./routes/messages.router.js'));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
