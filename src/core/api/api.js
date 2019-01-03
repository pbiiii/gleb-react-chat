import axios from 'axios'

export const client = axios.create({
    baseURL: 'http://localhost:9000/v1',
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
    }
})

const onResponseFulfilled = (config) => {
    const token = localStorage.getItem('token');
    if (token !== null) {
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;
};


const onResponseRejected = (error) => {
    const {status} = error.response
    if (status === 403) {
        localStorage.removeItem('token')
    }
    return Promise.reject(error)
}

client.interceptors.request.use(
    onResponseFulfilled,
    onResponseRejected
)