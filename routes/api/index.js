const router = require("express").Router();
const userRoutes = require("./users");
const singerRoutes = require("./singers");
const sessionRoutes = require("./session");
const logOutRoutes = require("./logOut");

// Routes
router.use("/users", userRoutes);
router.use("/singers", singerRoutes);
router.use("/session", sessionRoutes);
router.use("/logOut", logOutRoutes);

module.exports = router;
