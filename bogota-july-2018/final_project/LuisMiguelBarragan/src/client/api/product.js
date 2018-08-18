import axios from "axios";

export const getProteinProducts = (category) => axios.get(`/api/products/${category}`);
