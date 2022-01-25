const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScehama = new Schema({
	name: String,
	email: String,
	premium: Boolean,
});

module.exports = mongoose.model("User", userScehama);
