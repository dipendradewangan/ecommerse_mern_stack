import axios from 'axios'

export const GET_PRODUCTS = 'product/fetchAll'
export const GET_PRODUCTS_FULLFILLED = 'product/fetchProductFullfilled'


export  async function getPoducts(){
    const {data} = await axios.get('http://localhost:8080/api/products')
    return {
        type : GET_PRODUCTS,
        payload : data
    }
}


export function getProductFullfilled(){
    type 
} 