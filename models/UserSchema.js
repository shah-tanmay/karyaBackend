const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		premium: Boolean,
	},
	{
		timestamps: true,
	},
);

userSchema.virtual("tasks", {
	ref: "Tasks",
	localField: "_id",
	foreignField: "owner",
});

module.exports = mongoose.model("User", userSchema);
