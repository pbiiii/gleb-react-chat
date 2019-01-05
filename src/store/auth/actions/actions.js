import * as types from './actionTypes'
import { client } from '@src/core/api'

export const register = ({username, password}) => {
    return (dispatch) => {
        dispatch({
            type: types.REGISTER_REQUESTED
        });
        client.post('/signup', {username, password})
            .then(({data}) => {
                const { success, message } = data;
                if(success) {
                    dispatch({
                        type: types.REGISTER_SUCCESS,
                        payload: false
                    })
                } else {
                    if(message === 'Username is already taken') {
                        dispatch({
                            type: types.USER_ALREADY_EXISTS,
                            payload: false
                        })
                    }
                }
            })
            .catch((error) => {
                console.dir(error)
            })
    }
}

export const login = ({username, password}) => {
    return (dispatch) => {
        dispatch({
            type: types.LOGIN_REQUESTED
        });
        client.post('/login', {username, password})
            .then(({data}) => {
                const { success, message } = data;
                if(success) {
                    dispatch({
                        type: types.LOGIN_SUCCESS,
                        payload: data
                    })
                } else {
                    console.dir(message)
                }
            })
            .catch((error) => {
                console.dir(error)
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: types.LOGOUT_REQUESTED
        });
        client.get('/logout')
            .then(() => dispatch({
                type: types.LOGOUT_SUCCESS
            }))
            .catch((error) => {
                console.dir(error)
            })
    }
}

export const getUser = () => {
    return (dispatch) => {
        dispatch({
            type: types.GET_USER_REQUESTED,
        });
        client.get('/users/me')
            .then(({data}) => {
                const { user } = data
                dispatch({
                    type: types.GET_USER_SUCCESS,
                    payload: { user }
                });
            })
            .catch((error) => {
                dispatch({
                    type: types.GET_USER_FAILED,
                    payload: error
                });
            })

    };
}

export const editUser = ({username, firstName, lastName, city}) => {
    return (dispatch) => {
        dispatch({
            type: types.EDIT_USER_REQUESTED,
            payload: {username, firstName, lastName, city}
        });
        client.post('/users/me', {
            data: {
                username,
                firstName,
                lastName,
                city
            }
        }).then(({data}) => {
            dispatch({
                type: types.EDIT_USER_SUCCESS,
                payload: data
            });
        }).catch((error) => {
            dispatch({
                type: types.EDIT_USER_FAILED,
                payload: error
            });
        })

    };
}
