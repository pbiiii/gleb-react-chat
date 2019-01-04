const token = localStorage.getItem('token');

const initialState = {
    isAuthenticated: !!token,
    info: null,
    token,
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                info: action.payload.user,
                isAuthenticated: true,
            }
        case 'LOGOUT_SUCCESS':
            localStorage.removeItem('token')
            return {
            ...state,
            token: null,
            info: null,
            isAuthenticated: false,
        }
        default:
            return state
    }
}