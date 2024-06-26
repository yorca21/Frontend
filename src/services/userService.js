import axios from 'axios';

const API_URL = 'http://localhost:3000/users/';

const getUsers = () => {
    return axios.get(API_URL);
};

const getUserById = (userId) => {
    return axios.get(API_URL + userId);
};

const createUser = (userData) => {
    return axios.post(API_URL, userData);
};

const updateUser = (userId, userData) => {
    return axios.put(API_URL + userId, userData);
};

const deleteUser = (userId) => {
    return axios.delete(API_URL + userId);
};

export default {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
