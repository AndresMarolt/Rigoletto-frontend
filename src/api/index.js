import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use(req => {
    if(localStorage.getItem('admin')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('admin')).token} `
    }
    return req;
})

export const fetchAll = () => API.get(`/items`);
export const fetchItemsByCategory = (category) => API.get(`/items/category/${category}`);
export const fetchItemsById = (id) => API.get(`/item/${id}`);
export const create = (formData) => API.post(`/item`, formData, {
    headers: {
        "Content-Type":"multipart/form-data"
    }
})
export const update = (formData, itemId, itemImg) => API.put(`/item/${itemId}`, formData, {
    headers: {
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    }
});

export const deleteImg = (itemImg) => API.delete(`item/img/${itemImg}`);

export const deleteItem = (id, img) => API.delete(`item/${id}?img=${img}`);
export const deleteTenant = (id) => API.delete(`api/tenants/${id}`);

export const adminLogin = (formData) => API.post(`/admin/login`, formData);