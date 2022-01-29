const User = require("../models/UserSchema");

const getTaskResolver = async ({ email }) => {
	const user = await User.findOne({ email }).populate("tasks").exec();
	const tasks = user.tasks;
	return tasks;
};

module.exports = getTaskResolver;
