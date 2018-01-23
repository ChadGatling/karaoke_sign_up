const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/logOut"
router
	.route("/")
	.get(usersController.logOut);

module.exports = router;