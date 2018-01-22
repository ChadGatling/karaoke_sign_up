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
		password: "rachi"
	},
	{
		username: "cattschida",
		firstName: "Cat",
		lastName: "Tschida",
		nickname: "",
		password: "1111"
	},
	{
		username: "rachik",
		firstName: "Rachel",
		lastName: "K",
		nickname: "Khaleesi",
		password: "zela"
	},
	{
		username: "marceemarc",
		firstName: "Marc",
		lastName: "Ramirez",
		nickname: "Cheese Enchilada",
		password: "plumber"
	},
	{
		username: "abrakadabra",
		firstName: "Kurt",
		lastName: "Neopaofjafpkn",
		nickname: "The Magician",
		password: "password"
	},
	{
		username: "skiddleedee",
		firstName: "Dan",
		lastName: "Kojdho",
		nickname: "DK",
		password: "drummer"
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