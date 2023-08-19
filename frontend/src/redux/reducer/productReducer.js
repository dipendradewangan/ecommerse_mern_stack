import { ALL_PRODUCTS_FAILED, ALL_PRODUCTS_SUCCESS, ALL_PRODUCT_REQUEST} from "../actions/productActions";

export const productReducer = (state = { products : [] }, action)=>{
    switch (action.type) {
        case ALL_PRODUCTS_SUCCESS:
            return {
                products : action.payload
            }
        case ALL_PRODUCTS_FAILED :
            return {
                ...state ,
            }
        case ALL_PRODUCT_REQUEST :
            return {
                loading : true,
                products : []
            }
        default:
            return state;
    }
}