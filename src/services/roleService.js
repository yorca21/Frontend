import axios from 'axios';

const API_URL = 'http://localhost:3000/role';

const getRoles = () => {
    return axios.get(API_URL);
};

const getRoleById = (roleId) => {
    return axios.get(`${API_URL}/${roleId}`);
};

const createRole = (roleData) => {
    return axios.post(API_URL, roleData);
};

const updateRole = (roleId, roleData) => {
    return axios.put(`${API_URL}/${roleId}`, roleData);
};

const deleteRole = (roleId) => {
    return axios.delete(`${API_URL}/${roleId}`);
};

// Nueva función para buscar roles por criterio
const searchRoles = (criteria) => {
    return axios.get(`${API_URL}/search`, { params: criteria });
};

export default {
    getRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole,
    searchRoles
};
