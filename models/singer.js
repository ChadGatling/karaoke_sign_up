const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const singerSchema = new Schema({
	artist: {type: String, required: true},
	location: {type: String, required: true},
	name: {type: String, required: true},
	sang: {type: Boolean, default: false},
	song: {type: String, required: true}
});

const Singer = mongoose.model("Singer", singerSchema);

module.exports = Singer;