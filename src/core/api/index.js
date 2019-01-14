import axios from 'axios';
import clientConfig from '../config';

const client = axios.create({
    baseURL: clientConfig.API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

const onResponseFulfilled = (config) => {
    const token = localStorage.getItem('token');
    if (token !== null) {
        // eslint-disable-next-line
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;
};

const onResponseRejected = (error) => {
    const { status } = error.response;
    if (status === 403) {
        localStorage.removeItem('token');
    }
    return Promise.reject(error);
};

client.interceptors.request.use(onResponseFulfilled, onResponseRejected);

export default client;
