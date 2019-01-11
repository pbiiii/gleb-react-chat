export default {
    API_URL: process.env.NODE_ENV === 'production'
        ? 'https://dogecodes-chat-api.herokuapp.com/v1'
        : 'http://localhost:9000/v1',
    SOCKETS_URL: process.env.NODE_ENV === 'production'
        ? 'ws://dogecodes-chat-api.herokuapp.com/'
        : 'ws://localhost:9000',
};
