import React from 'react'

const CartItem = () => {
    return (
        <>
            <div className='cart-item my-5'>
                <div className='image-box'>
                    <img alt='product_mage' src='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600' />
                </div>
                <div className='description-box px-5'>
                    <h1 className='cart-item-name font-bold text-2xl mb-5'>Lenovo G5080 8gb/1tb 256gb ssd core i3 4th generation</h1>
                    <h1 className='cart-item-price font-semibold text-xl'>$500</h1>
                    <p className='cart-item-left font-bold text-lg'>4 item left</p>
                    <div>
                        <select className='item-quantity'>
                            <option value="0">Quantity</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="0">3</option>
                            <option value="0">4</option>
                            <option value="0">5</option>
                        </select>
                        <button>Remove</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartItem