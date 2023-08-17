import { GET_PRODUCTS, getPoducts } from "../actions/productActions";

export const productReducer = (state = { products : [] }, action)=>{
    switch (action.type) {
        case GET_PRODUCTS :
            return {
                products : [...state, action.payload]
            }

        default:
            return state;
    }
}