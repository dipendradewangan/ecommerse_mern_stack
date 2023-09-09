import axios from 'axios';

import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAILED
} from '../constants/productConstants';



export const getProducts = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST })
        const { data } = await axios.get("/api/products")
        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })

    }
    catch (error) {
        dispatch({ type: ALL_PRODUCTS_FAILED, payload: error })
    }

}