import axios from 'axios';

const API_URL = 'http://localhost:3000/permission';

const getPermissions = () => {
    return axios.get(API_URL);
};

const getPermissionById = (permissionId) => {
    return axios.get(`${API_URL}/${permissionId}`);
};

const createPermission = (permissionData) => {
    return axios.post(API_URL, permissionData);
};

const updatePermission = (permissionId, permissionData) => {
    return axios.put(`${API_URL}/${permissionId}`, permissionData);
};

const deletePermission = (permissionId) => {
    return axios.delete(`${API_URL}/${permissionId}`);

}
// Nueva función para buscar permisos por criterio
const searchPermissions = (criteria) => {
    return axios.get(`${API_URL}/search`, { params: criteria });
};

export default {
    getPermissions,
    getPermissionById,
    createPermission,
    updatePermission,
    deletePermission,
    searchPermissions
};
