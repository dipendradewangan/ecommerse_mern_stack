import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../redux/actions/productActions'
import "./ProductList.css"
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'


const ProductList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])


    const products = useSelector(state => state.products.products)


    return (
        <>
            <div className='productListContainer'>
                <h1>this is the product list</h1>
                <table>
                    <thead>
                        <td>Product Id</td>
                        <td>Product Name</td>
                        <td>Brand</td>
                        <td>Price</td>
                        <td>Ratings</td>
                        <td>Stock</td>
                        <td>
                            tools
                        </td>


                    </thead>
                    {
                        products.map((product, index) => {
                            return (
                                <tr key={index} className='productRow'>
                                    <td className='productCol id'>
                                        <input type='checkbox' />
                                    </td>
                                    <td className='productCol id'>{product._id}</td>
                                    <td className='productCol name'>
                                        {product.name}
                                        <p>{product.description}</p>
                                    </td>
                                    <td className='productCol'>{product.brandName}</td>
                                    <td className='productCol'>₹{product.price}</td>
                                    <td className='productCol'>{product.rating}</td>
                                    <td className='productCol'>{product.stock}</td>
                                    
                                </tr>
                            )
                        })
                    }

                </table>

            </div>
        </>
    )
}

export default ProductList

