import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../redux/actions/productActions'
import "./ProductList.css"
import Button from '@mui/material/Button'


const ProductList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])


    const products = useSelector(state => state.products.products)


    return (
        <>
            <div className='productListContainer'>
                <div className='p-3 mb-10 flex justify-between align-middle border-t-2 border-b-2'>
                    <h1 className='font-semibold text-4xl'>Products</h1>
                    <Button variant="contained">New Product</Button>
                </div>
                <div>
                    <table className='w-full'>
                        <thead className='tableHeading'>
                            <td className='productCol id'>
                                <input type='checkbox' />

                            </td>
                            <td>Product Id</td>
                            <td>Product Name</td>
                            <td>Brand</td>
                            <td>Price</td>
                            <td>Ratings</td>
                            <td>Stock</td>
                            <td>tools</td>


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
                                        <td className='productCol' style={{ textAlign: 'right' }}>₹{product.price}</td>
                                        <td className='productCol' style={{ textAlign: 'right' }}>{product.rating}</td>
                                        <td className='productCol' style={{ textAlign: 'right' }}>{product.stock}</td>
                                        <td className='productCol'>tools</td>

                                    </tr>
                                )
                            })
                        }

                    </table>

                </div>
            </div>
        </>
    )
}

export default ProductList

