import axios from "axios";

export default {
  // Gets all Characters
  getCharacters: function() {
    return axios.get("/api/characters");
  },
  // Gets the Character with the given id
  getCharacter: function(id) {
    return axios.get("/api/characters/" + id);
  },
  // Deletes the Character with the given id
  deleteCharacter: function(id) {
    return axios.delete("/api/characters/" + id);
  },
  // Saves a Character to the database
  saveCharacter: function(CharacterData) {
    return axios.post("/api/characters", CharacterData);
  }
};