import axios from "axios";

export default {
  // Gets all characters
  getAllCharacters: function() {
    return axios.get("/allcharacters");
  },
  // Gets the Character with the given id
  getUserCharacters: function (userName) {
    return axios.get("/usercharacters" + userName);
  },
  getCharacter: function (id) {
    return axios.get("/character" + id);
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
    return axios.post("/signup", query);
  },

  loginUser: function (query) {
    return axios.post("/signin", query);
  },

  loginCheck: function () {
    return axios.get("/logincheck");
  },

  logoutUser: function () {
    return axios.get("/api/logout");
  },

  getUserName: function (authorId) {
    return axios.get("/api/Users/" + authorId);
  },
};