const Task = require("../models/TaskSchema");
const User = require("../models/UserSchema");
const taskResolver = async ({
	completed,
	email,
	notes,
	list,
	due,
	tags,
	description,
}) => {
	const { name, premium, _id } = await User.findOne({ email });
	if (name) {
		const task = new Task({
			completed,
			notes,
			list,
			due,
			tags,
			description,
			owner: {
				_id,
				name,
				email,
				premium,
			},
		});
		return task.save();
	} else {
		throw new Error("User doesn't exist");
	}
};

module.exports = taskResolver;
