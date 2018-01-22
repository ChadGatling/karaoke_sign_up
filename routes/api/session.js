const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/session"
router
	.route("/")
	.get(usersController.session);

module.exports = router;