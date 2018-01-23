import axios from "axios";

export default {
    // Gets all users
    getUsers: function() {
        return axios.get("/api/users");
    },
    getSingers: function() {
        return axios.get("/api/singers");
    },
    // Gets the user with the given id
    getUser: function(id) {
        console.log("finding", id);
        return axios.get("/api/users/" + id);
    },
    logIn: function(userData) {
        return axios.post("/api/users/logIn", userData);
    },
    // Deletes the user with the given id
    deleteUser: function(id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a user to the database
    saveUser: function(userData) {
        return axios.post("/api/users", userData);
    },
    // Saves a singer to the database
    saveSinger: function(singerData) {
        return axios.post("/api/singers", singerData);
    },
    session: function() {
        return axios.get("/api/session")
    },
    logOut: function() {
        return axios.get("/api/logOut")
    }
};