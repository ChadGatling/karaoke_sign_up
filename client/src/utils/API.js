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
    // Deletes the user with the given id
    deleteUser: function(userData) {
        return axios.delete("/api/users", userData);
    },
    // Saves a user to the database
    saveUser: function(userData) {
        return axios.post("/api/users", userData);
    },
    // Update user in database
    updateUser: function(userData) {
        return axios.put("/api/users", userData);
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
    },
    logIn: function(userData) {
        return axios.post("/api/logIn", userData)
    },
    location: function(id) {
        return axios.post("/api/location/" + id)
    },
    listLocations: function() {
        return axios.get("/api/locations")
    }
};