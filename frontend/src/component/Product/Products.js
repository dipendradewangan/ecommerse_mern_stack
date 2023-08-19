import React from 'react'
import { useEffect } from 'react'
import ProductCard from './ProductCard/ProductCard'
import "./Products.css"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/productActions'
const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector(state=>state)
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    console.log(products)
    return (
        <>
            <button style={{ background: "red" }} onClick={() => dispatch(getProducts())}>Load</button>
            <div className='productContainer w-full p-10'>
                <h1 className='font-semibold text-5xl text-center my-14'>Featured Products</h1>
                <div className='productRenderBox'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                </div>
            </div>
        </>
    )
}

export default Products
