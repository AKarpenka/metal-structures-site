import ES6Promise from 'es6-promise';
import axios from 'axios';

ES6Promise.polyfill();

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8888'
});

// const getMessage = ({
//     response: {
//         data: { error, message }
//     }
// }) => error || message;

axiosInstance.interceptors.request.use(
    config => {
        return config;
    },
    error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
        // return Promise.reject(getMessage(error));
    }
);

export default axiosInstance;
