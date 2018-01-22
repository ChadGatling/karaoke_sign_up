const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
// const mongojs = require("mongojs");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Session
app.use(session({ 
	secret: 'whatsupchickenbutt',
	resave: false,
	saveUninitialized: false, 
	cookie: { maxAge: 60000 }
}));
// Add routes, both API and view
app.use(routes);

// app.use(function() {
// 	console.log(Date());
// });

// app.use('/', function(req, res, next) {
// 	req.session.name = "steve";
//   	console.log(req.session);
//   	res.send(req.session.name);
// });

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/karaokeSignup"
);

// var databaseUrl = "karaokeSignup";
// var collections = ["users"];

// var db = mongojs(databaseUrl, collections);

// db.users.find({}, (error, found) => {
// 	console.log(found);
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
