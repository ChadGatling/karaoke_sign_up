const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/karaokeSignup",
  {
    useMongoClient: true
  }
);

const userSeed = [
	{
		name: "Elliott",
		location:"Ego's",
		songName: "No diggity",
		songArtist: "Chet Faker",
		completed: false
	},
	{
		name: "Rachel",
		location: "Ego's",
		songName: "Shoop",
		songArtist: "Salt-N-Peppa",
		completed: false
	},
	{
		name: "DK",
		location: "Ego's",
		songName: "Fast Car",
		songArtist: "Tracey Chapman",
		completed: false
	},
	{
		name: "Marc",
		location: "Ego's",
		songName: "Country Song",
		songArtist: "Some Guy",
		completed: false
	}
	// {
	// 	name: "",
	// 	location: "",
	// 	songName: "",
	// 	songArtist: "",
	// 	completed: flase
	// },
];

db.User
	.remove({})
	.then(() => db.User.collection.insertMany(userSeed))
	.then(data => {
		console.log(data.insertedIds.length + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.log(err);
		process.exit(1);
	});