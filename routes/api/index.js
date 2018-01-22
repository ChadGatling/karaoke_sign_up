const router = require("express").Router();
const userRoutes = require("./users");
const singerRoutes = require("./singers");
const sessionRoutes = require("./session");

// Routes
router.use("/users", userRoutes);
router.use("/singers", singerRoutes);
router.use("/session", sessionRoutes);

module.exports = router;
