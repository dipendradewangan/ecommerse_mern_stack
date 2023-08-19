import React from 'react'
import "./ProductCard.css"
import ReactStars from 'react-rating-stars-component'

const ProductCard = ({product, index}) => {
    
    const ratingOptions = {
        count: 5,
        size: 24,
        activeColor: 'red',
        value: product.rating,
        onchange: false,
        isHalf: true,
        edit: false
    
    }
    
    console.log(index)
    return (
        <>
            <div key={product.brandName} className='productCard'>
                <img src='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600' alt='productName' className='w-full' />
                <div className='p-2'>
                    <p className='text-lg font-semibold mb-2' style={{color : 'gray'}}>{product.brandName} {product.category}</p>
                    <h1 className='text-xl font-semibold mb-5' style={{color : '#555353'}}>{product.name}</h1>
                    <h1 className='font-bold text-2xl' style={{color : "gray"}}>${product.price}</h1>
                    <ReactStars
                        {...ratingOptions}
                    />
                </div>

            </div>
        </>
    )
}

export default ProductCard

