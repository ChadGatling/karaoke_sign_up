const router = require("express").Router();
const locationsController = require("../../controllers/locationsController");

// Matches with "/api/locations/:id"
router
	.route("/:id")
	.get(locationsController.findById);

module.exports = router;