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
            .findOne({username: req.params.id})
            .then(dbModel => {
                req.session._id = dbModel._id;
                res.json(dbModel); // disable for production
                console.log(req.session);
            })
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("Creating", req.body);
        db.User
            .create(req.body)
            .then(dbModel => {
                req.session._id = dbModel._id;
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
        console.log(req.session);
        if (req.session) {
            db.User
                .findById(req.session._id)
                .then(dbModel => res.json(dbModel)) // diable json for production
                .catch(err => res.status(422).json(err));
        } else {
            res.json("No req.session._id");
        }
    }
};
