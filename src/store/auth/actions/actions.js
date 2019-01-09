import client from 'src/core/api';
import * as types from './actionTypes';

export const register = ({ username, password }) => (dispatch, getState) => {
    const { isFetching } = getState().services;
    if (isFetching.register) {
        return Promise.resolve();
    }
    dispatch({
        type: types.REGISTER_REQUESTED,
    });
    return client.post('/signup', { username, password }).then(({ data }) => {
        const { success, message } = data;
        if (success) {
            dispatch({
                type: types.REGISTER_SUCCESS,
                payload: data,
            });
        } else {
            throw new Error(message);
        }
    }).catch(error => dispatch({
        type: types.REGISTER_FAILED,
        payload: error,
    }));
};

export const login = ({ username, password }) => (dispatch, getState) => {
    const { isFetching } = getState().services;
    if (isFetching.login) {
        return Promise.resolve();
    }
    dispatch({
        type: types.LOGIN_REQUESTED,
    });
    return client.post('/login', {
        username,
        password,
    }).then(({ data }) => {
        const { success, message } = data;
        if (success) {
            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: data,
            });
        } else {
            throw new Error(message);
        }
    }).catch(error => dispatch({
        type: types.LOGIN_FAILED,
        payload: error,
    }));
};

export const logout = () => (dispatch, getState) => {
    const { isFetching } = getState().services;
    if (isFetching.logout) {
        return Promise.resolve();
    }
    dispatch({
        type: types.LOGOUT_REQUESTED,
    });
    return client.get('/logout').then(() => dispatch({
        type: types.LOGOUT_SUCCESS,
    })).catch(error => dispatch({
        type: types.LOGOUT_FAILED,
        payload: error,
    }));
};

export const getUser = () => (dispatch, getState) => {
    const { isFetching } = getState().services;
    if (isFetching.getUser) {
        return Promise.resolve();
    }
    dispatch({
        type: types.GET_USER_REQUESTED,
    });
    return client.get('/users/me').then(({ data }) => {
        const { user } = data;
        dispatch({
            type: types.GET_USER_SUCCESS,
            payload: { user },
        });
    }).catch(error => dispatch({
        type: types.GET_USER_FAILED,
        payload: error,
    }));
};

export const editUser = ({
    username, firstName, lastName, city,
}) => (dispatch, getState) => {
    const { isFetching } = getState().services;
    if (isFetching.editUser) {
        return Promise.resolve();
    }
    dispatch({
        type: types.EDIT_USER_REQUESTED,
        payload: {
            username, firstName, lastName, city,
        },
    });
    return client.post('/users/me', {
        data: {
            username,
            firstName,
            lastName,
            city,
        },
    }).then(({ data }) => {
        dispatch({
            type: types.EDIT_USER_SUCCESS,
            payload: data,
        });
    }).catch(error => dispatch({
        type: types.EDIT_USER_FAILED,
        payload: error,
    }));
};
