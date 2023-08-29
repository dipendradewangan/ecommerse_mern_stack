import { Box, Modal } from '@mui/material'
import React from 'react'

import ecommerseAuthImg from '../images/ecommerse-auto-img.jpg'


const style = {
    background: "white",
    position: "relative",
    top: "5vmin",
    margin: "0 auto",
    width: "80%",
    tansform: "translate(-50%, -50%)",
    boder: "none"
}

const SignupModal = ({ signupOpen, setSignupOpen, setLoginOpen }) => {

    console.log(signupOpen)
    return (
        <>
            <Modal
                open={signupOpen}
                onClose={() => setSignupOpen(false)}
            >
                <Box sx={style}>
                    <div className='loginContainer'>
                        <div className='logo-side'>
                            <img className='ecommerse-auto-img' src={ecommerseAuthImg} alt='login-logo' />
                        </div>
                        <div className='form-side'>
                            <h1 className='text-center font-medium text-3xl mb-10'>Welcome to Ecommerse</h1>
                            <div className='login-form-box'>
                                <h1 className='text-left font-medium text-3xl mb-10'>Register now</h1>
                                <form className='flex flex-col gap-2'>
                                    <label>Email</label>
                                    <input type="email" />
                                    <label>Password</label>
                                    <input type='password' />
                                    <label>Email</label>
                                    <input type="email" />
                                    <label>Password</label>
                                    <input type='password' />
                                    <button type='submit'>Login</button>
                                </form>
                                <p>Allready Signed up ? <button onClick={()=>{setLoginOpen(true), setSignupOpen(false)}}>Login now!</button></p>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default SignupModal
