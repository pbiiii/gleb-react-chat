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
        case 'LOGIN_FAILED':
            return {...state, pending: false, success: false}
        default:
            return state
    }
}