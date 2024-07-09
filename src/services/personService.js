import axios from 'axios';

const API_URL = 'http://localhost:3000/person';

const getPersons = () => {
    return axios.get(API_URL);
};

const getPersonById = (personId) => {
    return axios.get(`${API_URL}/${personId}`);
};

const createPerson = (personData) => {
    return axios.post(API_URL, personData);
};

const updatePerson = (personId, personData) => {
    return axios.put(`${API_URL}/${personId}`, personData);
};

const deletePerson = (personId) => {
    return axios.delete(`${API_URL}/${personId}`);
};

// Nueva función para buscar personas por criterio
const searchPersons = (criteria) => {
    return axios.get(`${API_URL}/search`, { params: criteria });
};

export default {
    getPersons,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson,
    searchPersons
};
