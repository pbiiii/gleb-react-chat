export default {
    API_URL: process.env.NODE_ENV === 'production'
        ? 'https://gleb-react-chat.herokuapp.com/v1'
        : 'http://localhost:9000/v1',
    SOCKETS_URL: process.env.NODE_ENV === 'production'
        ? 'ws://gleb-react-chat.herokuapp.com'
        : 'ws://localhost:9000',
};
