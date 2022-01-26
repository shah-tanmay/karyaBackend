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
			.then(() => {
				next();
			})
			.catch((error) => {
				console.log(error);
			});
	} else {
		res.status(403).send("Unauthorized");
	}
};

module.exports = authMiddleWare;
