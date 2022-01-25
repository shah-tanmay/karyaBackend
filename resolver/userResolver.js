const User = require("../models/UserSchema");

var fakeUserDatabase = [
	{ name: "Tanmay Shah", email: "shahtanmay@gmail.com", id: 1, premium: false },
	{ name: "Deep Gandhi", email: "deepgandhi@gmail.com", id: 2, premium: false },
	{ name: "Vaibhav Chopra", email: "vaibhav@gmail.com", id: 3, premium: true },
];
const userResolver = async (args) => {
	return await User.findById(args.id);
};

module.exports = {
	userResolver,
};
