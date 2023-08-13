import React from 'react'
import "./Cart.css"
import CartItem from './CartItem'

const Cart = () => {
    return (
        <>
            <h1 className='font-semibold text-5xl text-center my-14'>Shopping Cart</h1>
            <div className='cart-container p-4'>
                <div className='cart-item-list'>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className='cart-info'>
                    <table>
                        <tr className=' mb-6'>
                            <td className='cart-info-label pb-6'>Total Items : </td>
                            <td className='cart-info-label pb-6'>15</td>

                        </tr>
                        <tr>
                            <td className='cart-info-label'>Amount : </td>
                            <td className='cart-info-label'>20000.00</td>

                        </tr>
                        <tr>
                            <td className='cart-info-label'>Delevery Charges : </td>
                            <td className='cart-info-label'>40.00</td>

                        </tr>
                        <tr>
                            <td className='cart-info-label'>Subtotal Amount : </td>
                            <td className='cart-info-label'>20040.00</td>

                        </tr>
                    </table>

                </div>


            </div>
        </>
    )
}

export default Cart
