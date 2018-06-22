import axios from 'axios';

export default {



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