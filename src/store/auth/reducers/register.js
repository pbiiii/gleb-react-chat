const initialState = {
    success: false,
    pending: false,
    userAlreadyExists: false,
}

export const register = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_REQUESTED':
            return {...state, pending: true, success: false}
        case 'REGISTER_SUCCESS':
            return {...state, pending: false, success: true}
        case 'REGISTER_FAILED':
            return {...state, pending: false, success: false}
        case 'USER_ALREADY_EXISTS':
            return {...state, pending: false, userAlreadyExists: true}
        default:
            return state
    }
}