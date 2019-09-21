import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertInevntory = payload => api.post(`/inventory`, payload);
export const getAllMInevntory = () => api.get(`/inventory`);
export const updateInevntoryById = (id, payload) => api.put(`/inventory/${id}`, payload);
export const deleteInevntoryById = id => api.delete(`/inventory/${id}`);
export const getInevntoryById = id => api.get(`/inventory/${id}`);

const apis = {
    insertInventory,
    getAllInventory,
    updateInventoryById,
    deleteInventoryById,
    getInventoryById,
}

export default apis;