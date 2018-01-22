const router = require("express").Router();
const singersController = require("../../controllers/singersController");

// Matches with "/api/singers"
router.route("/")
	.get(singersController.findAll)
	.post(singersController.create);

// Matches with "/api/singers/:id"
router
	.route("/:id")
	.get(singersController.findById)
	.put(singersController.update)
	.delete(singersController.remove);

module.exports = router;
