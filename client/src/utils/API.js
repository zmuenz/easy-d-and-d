import axios from "axios";

export default {
  // Gets all characters
  getCharacters: function() {
    return axios.get("/api/Character");
  },
  // Gets the Character with the given id
  getCharacter: function (id) {
    return axios.get("/api/CharacterID" + id);
  },
  // Deletes the Character with the given id
  deleteCharacter: function (id) {
    return axios.delete("/api/CharacterDelete" + id);
  },
  // Saves a Character to the database
  saveCharacter: function (CharacterData) {
    return axios.post("/api/Character", CharacterData);
  },

  //user count

  //create user
  saveNewUser: function (query) {
    return axios.post("/api/signup", query);
  },

  loginUser: function (query) {
    return axios.post("/api/signin", query);
  },

  checkUser: function () {
    return axios.get("/api/dashboard");
  },

  logoutUser: function () {
    return axios.get("/api/logout");
  },

  getUserName: function (authorId) {
    return axios.get("/api/Users/" + authorId);
  },
};