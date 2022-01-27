const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScehama = new Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
	},
	premium: Boolean,
});

module.exports = mongoose.model("User", userScehama);
