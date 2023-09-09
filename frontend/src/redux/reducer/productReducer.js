import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAILED
} from "../constants/productConstants"

export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                products: []
            }
        case ALL_PRODUCTS_SUCCESS:
            return {
                isLoading: false,
                products: action.payload.data
            }
        case ALL_PRODUCTS_FAILED:
            return {
                isLoading: false,
                ...state,
            }
        default:
            return state;
    }
}