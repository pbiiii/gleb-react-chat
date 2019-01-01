const initialState = {
    success: false,
    pending: false,
    badCredentials: false,
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUESTED':
            return {...state, pending: true, success: false}
        case 'LOGIN_SUCCESS':
            return {...state, pending: false, success: true}
        case 'REGISTER_FAILED':
            return {...state, pending: false, registerSuccess: false}
        case 'USER_ALREADY_EXISTS':
            return {...state, pending: false, userAlreadyExists: true}
        default:
            return state
    }
}