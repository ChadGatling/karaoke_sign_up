const db = require("../models");

// Defining methods for the usersController
module.exports = {
    findAll: function(req, res) {
        console.log("Finding", req.body);
        db.User
            .find(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByInfo: function(req, res) {
        console.log("finding", req.params.id);
        db.User
            .findOne({username: req.params.id}, "-password")
            .then(dbModel => {
                console.log("find by info", dbModel);
                res.json(dbModel); // disable for production
            })
            .catch(err => {
                console.log("HERE IS YOUR ERROR", err);
                res.status(422).json(err)
            });
    },
    create: function(req, res) {

        // Validator
        req.checkBody(
            "username",
            "Username is not valid."
            ).isAlphanumeric();

        var errors = req.validationErrors();
        if (errors) {
            res.send(errors);
            return;
        } else 
        
        // DB insert user
        db.User
            .create(req.body)
            .then(dbModel => {
                req.session.userId = dbModel._id;
                res.json("done");
            })
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    session: function(req, res) {
        console.log("Session api hit", req.session);
        if (req.session) {
            db.User
                .findById(req.session.userId)
                .then(dbModel => res.json(dbModel)) // diable json for production
                .catch(err => res.status(422).json(err));
        } else {
            res.json("No req.session._id");
        }
    },
    logOut: function(req, res) {
        if (req.session) {
            req.session.destroy();
            console.log("Logout api hit after destroy", req.session);
            res.send("done");
        } else {
            res.json("No req.session._id");
        }
    },
    logIn: function(req, res) {
        console.log("logging in", req.body);
        db.User
            .findOne(req.body)
            .then(dbModel => {
                if (dbModel) {
                    req.session.userId = dbModel._id
                    console.log("req.session =", req.session);
                }
                res.json(dbModel); // disable for production
            })
            .catch(err => {
                // console.log("HERE IS YOUR ERROR", err);
                res.status(422).json(err)
            });
    }
};
