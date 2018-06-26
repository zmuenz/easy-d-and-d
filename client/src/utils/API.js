import axios from "axios";

export default {
  // Gets all characters
  getCharacters: function() {
    return axios.get("/api/characters");
  },
  // Gets the Character with the given id
  getCharacter: function (id) {
    return axios.get("/api/characters/" + id);
  },
  // Deletes the Character with the given id
  deleteCharacter: function (id) {
    return axios.delete("/api/characters/" + id);
  },
  // Saves a Character to the database
  saveCharacter: function (CharacterData) {
    return axios.post("/api/characters", CharacterData);
  },

  //user count
  getCount: function () {
    return axios.get("/api/usercount");
  },

  //create user
  saveNewUser: function (query) {
    return axios.post("/api/createUser", query);
  },

  loginUser: function (query) {
    return axios.post("/api/login", query);
  },

  checkUser: function () {
    return axios.get("/api/logincheck");
  },

  logoutUser: function () {
    return axios.get("../../api/logout");
  },

  getUserName: function (authorId) {
    return axios.get("../../../api/Users/" + authorId);
  },
};