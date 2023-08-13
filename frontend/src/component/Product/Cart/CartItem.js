import React from 'react'
import { Autocomplete, TextField, Button } from '@mui/material'


const quantityOption = [
    { label: 1, value: 1 }
]

const CartItem = () => {
    return (
        <>
            <div className='cart-item my-10'>
                <div className='image-box mr-9'>
                    <img alt='product_mage' src='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600' />
                </div>
                <div className='description-box px-5'>
                    <h1 className='cart-item-name font-bold text-2xl mb-5'>Lenovo G5080 8gb/1tb 256gb ssd core i3 4th generation</h1>
                    <h1 className='cart-item-price font-semibold text-xl'>$500</h1>
                    <p className='cart-item-left font-semibold mb-2 text-lg'>4 item left</p>
                    <div className='flex'>
                        <Autocomplete 
                            className='mr-2'
                            disablePortal
                            id="quentity-selector"
                            options={quantityOption}
                            style={{ width: "150px" }}
                            size="small"
                            renderInput={(params) => <TextField {...params} label="Quantity" />}

                        />
                        <Button size='small' variant="contained" color='secondary'>Remove</Button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default CartItem