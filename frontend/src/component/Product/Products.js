import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import "./Products.css"

const Products = () => {
    return (
        <>
            <div className='productContainer w-full p-10'>
                <h1 className='font-semibold text-5xl text-center my-14'>Featured Products</h1>
                <div className='productRenderBox'>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    
                </div>
            </div>
        </>
    )
}

export default Products
