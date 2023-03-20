import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use(req => {
    if(localStorage.getItem('admin')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('admin')).token} `
    }
    return req;
})

export const fetchAll = () => API.get(`/items`);
export const fetchItemsByCategory = (category) => API.get(`/item/category/${category}`);
export const fetchItemsById = (id) => API.get(`/item/${id}`);

// CRUD REQUESTS ---------------------------------------------------------------------------------------------------
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

// CART REQUESTS ---------------------------------------------------------------------------------------------------
export const createCart = (userId) => API.post(`/cart`, {userId});
export const getCart = (userId) => API.get(`/cart/user/${userId}`);
export const addToCart = (item, cart) => API.put(`/cart/add-item`, {item, cart})
export const updateCartItem = (item, cart) => API.put(`/cart/update-item`, {item, cart});
export const deleteCartItem = (itemId, cartId) => API.put(`/cart/delete-item/${itemId}`, {cartId});

// ADMIN AUTH REQUESTS ---------------------------------------------------------------------------------------------
export const adminLogin = (formData) => API.post(`/admin/login`, formData);

// USER AUTH REQUESTS ----------------------------------------------------------------------------------------------
export const userSignup = (formData) => API.post(`user/signup`, formData)
export const userLogin = (formData) => API.post(`user/login`, formData);
