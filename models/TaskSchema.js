const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskScehama = new Schema({
	completed: {
		type: Boolean,
	},
	email: {
		type: String,
		unique: true,
	},
	notes: {
		type: String,
	},
	list: {
		type: String,
	},
	due: {
		type: String,
	},
	tags: {
		type: String,
	},
	description: {
		type: String,
	},
});

module.exports = mongoose.model("Task", taskScehama);
