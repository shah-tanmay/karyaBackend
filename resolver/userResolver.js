const User = require("../models/UserSchema");

const userResolver = async ({ email }) => {
	return await User.findOne({ email });
};

module.exports = {
	userResolver,
};
