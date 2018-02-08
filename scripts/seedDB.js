const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/karaokeSignup"
);

const singerSeed = [
	{
		name: "Elliott",
		location:"Ego's",
		song: "No diggity",
		artist: "Chet Faker",
		sang: false
	},
	{
		name: "Rachel",
		location: "Ego's",
		song: "Shoop",
		artist: "Salt-N-Peppa",
		sang: false
	},
	{
		name: "DK",
		location: "Ego's",
		song: "Fast Car",
		artist: "Tracey Chapman",
		sang: false
	},
	{
		name: "Marc",
		location: "Ego's",
		song: "Country Song",
		artist: "Some Guy",
		sang: false
	},
	{
		name: "Cat",
		location: "Ego's",
		song: "Old song",
		artist: "Some old lady",
		sang: false
	}
	// {
	// 	name: "",
	// 	location: "",
	// 	song: "",
	// 	artist: "",
	// 	sang: flase
	// },
];

const userSeed = [
	{
		username: "ewendel88",
		firstName: "Elliott",
		lastName: "Wendel",
		nickname: "",
		password: "$2a$10$1gWB/XYL9uqBCvjH7KbJrObpsUzMi9abTpqRMPLxJ9wBNpbryUwpK",
		access: "admin"
	},
	{
		username: "cattschida",
		firstName: "Cat",
		lastName: "Tschida",
		nickname: "",
		password: "$2a$10$XtfnLDsDRZ58c9rOO.ODHe69Z6hUfwSscXTk7atueNNA/dy0j5ZI6",
		access: "singer"
	},
	{
		username: "rachik",
		firstName: "Rachel",
		lastName: "K",
		nickname: "Khaleesi",
		password: "$2a$10$Rv5U8U5QOqTVTX7GCrPMCuo7vYvuLFZWY.PPtgEKA7MeFQ79VBXoW",
		access: "singer"
	},
	{
		username: "anthonyM",
		firstName: "Anthony",
		lastName: "Moody",
		nickname: "",
		password: "$2a$10$ICO4R6bchfH6wSjH/mETeOTHQ63mZpkebqg4SD95R4qkbsAGVzB3.",
		access: "kj"
	},
	{
		username: "marceemarc",
		firstName: "Marc",
		lastName: "Ramirez",
		nickname: "Cheese Enchilada",
		password: "$2a$10$FaxzTL8GTuQeP3aOW6W1IOBUtSwgix0LP2RFK/RV5iHJGYIb4Bf6q",
		access: "singer"
	},
	{
		username: "abrakadabra",
		firstName: "Kurt",
		lastName: "Neopaofjafpkn",
		nickname: "The Magician",
		password: "$2a$10$zJvgIGlu40mo5wkelz9DCenZ1JTZ0709NDa8wkeBygNpUnbPpG6rq",
		access: "singer"
	},
	{
		username: "skiddleedee",
		firstName: "Dan",
		lastName: "Kojdho",
		nickname: "DK",
		password: "$2a$10$3SKelUQKILNCmOyweAWp7Oqoej6tX1zycwI2T7UHrXJEa36aTZ3Ri",
		access: "singer"
	}
];

const locationSeed = [
	{
		name: "Ego's"
	},
	{
		name: "Baker St. Pub"
	}
];

db.Location
	.remove({})
	.then(() => db.Location.collection.insertMany(locationSeed))
	.then(data => {
		process.exit(0);
	})
	.catch(err => {
		console.log(err);
		process.exit(1);
	});

db.User
	.remove({})
	.then(() => db.User.collection.insertMany(userSeed))
	.then(data => {
		process.exit(0);
	})
	.catch(err => {
		console.log(err);
		process.exit(1);
	});

// db.Singer
// 	.remove({})
// 	.then(() => db.Singer.collection.insertMany(singerSeed))
// 	.then(data => {
// 		process.exit(0);
// 	})
// 	.catch(err => {
// 		console.log(err);
// 		process.exit(1);
// 	})