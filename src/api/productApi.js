
import api from "."

export const createProduct = (data) => api.post("/products", data)

export const getAllProduct = () => api.get("/products");

export const getProductDetail = (id) => api.get(`/products/${id}`);

export const updateProduct = (id, data) => api.patch(`/products/${id}`, data)

export const deleteProduct = (id) => api.delete(`/products/${id}`)

