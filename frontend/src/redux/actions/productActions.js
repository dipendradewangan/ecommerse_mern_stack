import axios from 'axios';

export const ALL_PRODUCT_REQUEST = 'ALL_PRODUCT_REQUEST'
export const ALL_PRODUCTS_SUCCESS = 'ALL_PRODUCTS_SUCCESS'
export const ALL_PRODUCTS_FAILED = 'ALL_PRODUCTS_FAILED'


export const getProducts = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST })
        const { data } = await axios.get("/api/products")
        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })
 
    }
    catch (error){
        dispatch({type : ALL_PRODUCTS_FAILED, payload : error})
    }

}