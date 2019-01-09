import * as types from '../actions/actionTypes';

const token = localStorage.getItem('token');

const initialState = {
    isAuthenticated: !!token,
    info: null,
    token,
};

// eslint-disable-next-line
export const user = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS: {
            const { token: newToken, user: info } = action.payload;
            localStorage.setItem('token', token);
            return {
                ...state,
                token: newToken,
                info,
                isAuthenticated: true,
            };
        }
        case types.GET_USER_SUCCESS:
            return {
                ...state,
                info: action.payload.user,
            };
        case 'LOGOUT_SUCCESS':
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                info: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};
