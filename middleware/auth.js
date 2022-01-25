const admin = require("firebase-admin");

var serviceAccount = require("./firebase.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const authMiddleWare = async (req, res, next) => {
	if (req.headers.token) {
		admin
			.auth()
			.verifyIdToken(req.headers.token)
			.then((token) => {
				console.log(token);
				next();
			})
			.catch((error) => {
				console.log(error);
				res.status(403).send("Unauthorized");
			});
	} else {
		res.status(403).send("Unauthorized");
	}
};

module.exports = authMiddleWare;
