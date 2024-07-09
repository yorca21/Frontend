import axios from 'axios';

const API_URL = 'http://localhost:3000/unit';

const getUnits = () => {
    return axios.get(API_URL);
};

const getUnitById = (unitId) => {
    return axios.get(`${API_URL}/${unitId}`);
};

const createUnit = (unitData) => {
    return axios.post(API_URL, unitData);
};

const updateUnit = (unitId, unitData) => {
    return axios.put(`${API_URL}/${unitId}`, unitData);
};

const deleteUnit = (unitId) => {
    return axios.delete(`${API_URL}/${unitId}`);
};

// Nueva función para buscar unidades por criterio
const searchUnits = (criteria) => {
    return axios.get(`${API_URL}/search`, { params: criteria });
};

export default {
    getUnits,
    getUnitById,
    createUnit,
    updateUnit,
    deleteUnit,
    searchUnits
};
