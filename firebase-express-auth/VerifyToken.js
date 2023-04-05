const auth = require('./firebase-config');

const VerifyToken = async (req, res, next) => {
	try {
		const token = req.headers.bearer;
		const decodeValue = await auth.verifyIdToken(token);

		if (decodeValue) {
			req.user = decodeValue;
			return next();
		}
	} catch (e) {
		return res.status(401).json({ message: 'Unauthorized/invalid credentials' });
	}
};

module.exports = VerifyToken;
