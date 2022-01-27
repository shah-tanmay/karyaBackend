const Task = require("../models/TaskSchema");
const taskResolver = ({
	completed,
	email,
	notes,
	list,
	due,
	tag,
	description,
}) => {
	const task = new Task({
		completed,
		email,
		notes,
		list,
		due,
		tag,
		description,
	});
	return task.save();
};

module.exports = taskResolver;
