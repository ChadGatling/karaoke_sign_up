const router = require("express").Router();
const userRoutes = require("./users");
const singerRoutes = require("./singers");
const sessionRoutes = require("./session");
const logOutRoutes = require("./logOut");
const logInRoutes = require("./logIn");
const locationRoutes = require("./locations");


// Routes
router.use("/users", userRoutes);
router.use("/singers", singerRoutes);
router.use("/session", sessionRoutes);
router.use("/logOut", logOutRoutes);
router.use("/logIn", logInRoutes);
router.use("/location", locationRoutes);

module.exports = router;
