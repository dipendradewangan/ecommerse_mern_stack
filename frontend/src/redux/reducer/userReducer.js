import {
    LOGIN_REQUEST,
    LOGIN_SUCCESSS,
    LOGIN_FAILED
} from '../constants/userConstants.js'


export const userReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST :
            return {
                isLoading : true,
                isAuthenticated : false
            }
        case LOGIN_SUCCESSS :
            return {
                isLoading : false,
                isAuthenticated : true,
                data : action.payload
            }
        case LOGIN_FAILED :
            return {
                isLoading : false,
                isAuthenticated : false,
                error : action.payload
            }
        default:
            return state;
    }
}