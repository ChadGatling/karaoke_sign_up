const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/logIn/:id"
router
	.route("/")
	.post(usersController.logIn);

module.exports = router;