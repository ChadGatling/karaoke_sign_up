const router = require("express").Router();
const userRoutes = require("./users");
const singerRoutes = require("./singers");

// Routes
router.use("/users", userRoutes);
router.use("/singers", singerRoutes);

module.exports = router;
