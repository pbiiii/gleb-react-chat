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
            const { user, token } = action.payload
            localStorage.setItem('token', token)
            return {
                ...state,
                token,
                info: user,
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