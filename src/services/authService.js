import axios from 'axios';

const API_URL = 'http://localhost:3000/auth/';

const login = (username, password) => {
    return axios.post(API_URL + 'login', {
        username,
        password
    });
};
const register = (username, password) => {
    return axios.post(API_URL + 'register', {
        username,
        password,
    });
};

export default {  
    login, 
    register
};
