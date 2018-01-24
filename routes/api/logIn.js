const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/logIn/:id"
router
	.route("/:id")
	.get(usersController.logIn);

module.exports = router;