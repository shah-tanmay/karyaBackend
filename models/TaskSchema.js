const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskScehama = new Schema(
	{
		completed: {
			type: Boolean,
			required: true,
		},
		notes: {
			type: String,
			required: true,
		},
		list: {
			type: String,
			required: true,
		},
		due: {
			type: String,
			required: true,
		},
		tags: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		owner: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Tasks", taskScehama);
