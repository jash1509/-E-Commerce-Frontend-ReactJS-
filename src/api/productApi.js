import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const fetchAllProducts = () => API.get('/products');

export const fetchProductById = (id) => API.get(`/products/${id}`);

export const fetchCategories = () => API.get('/products/categories');

export default API;
