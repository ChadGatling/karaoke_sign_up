const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {type: String, required: true},
	location: {type: String, required: true},
	songName: {type: String, required: true},
	songArtist: {type: String, required: true},
	completed: {type: Boolean, default: false}
});

const User = mongoose.model("User", userSchema);

module.exports = User;