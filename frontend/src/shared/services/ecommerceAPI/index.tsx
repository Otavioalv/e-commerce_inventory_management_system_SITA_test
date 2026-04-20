import axios from 'axios';
import { AppError } from '../../errors/AppError';

export const api = axios.create({
    baseURL: "http://192.168.1.9:3333/api",
    timeout: 20000,
    headers: {"Content-Type": "application/json"}
});


// BASIC error handling.
api.interceptors.response.use(
    response => response,
    error => {
        const message = error.response?.data?.error || "Unexpected server error";
        return Promise.reject(new AppError(message));
    }
);
