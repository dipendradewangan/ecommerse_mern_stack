import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import "./LoginModal.css"
import ecommerseAuthImg from '../images/ecommerse-auto-img.jpg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const style = {
    background: "white",
    position: "relative",
    top: "5vmin",
    margin: "0 auto",
    width: "80%",
    tansform: "translate(-50%, -50%)",
    boder: "none"
}



const LoginModal = ({ loginOpen, setLoginOpen, setSignupOpen}) => {
    
    const handelClose = () => setLoginOpen(false)
    const [showCredential, setShowCredential] = useState(false)
    let isVisible = showCredential;

    console.log(loginOpen)
    return (
        <>
            <Modal
                open={loginOpen}
                onClose={handelClose}
            >
                <Box sx={style}>
                    <div className='loginContainer'>
                        <div className='logo-side'>
                            <img className='ecommerse-auto-img' src={ecommerseAuthImg} alt='login-logo' />
                        </div>
                        <div className='form-side'>
                            <h1 className='text-center font-medium text-3xl mb-10'>Welcome to Ecommerse</h1>
                            <div className='login-form-box'>
                                <h1 className='text-left font-medium text-3xl mb-10'>Login now</h1>
                                <form className='flex flex-col gap-2'>
                                    <label>Email</label>
                                    <input type="email" />
                                    <label>Password</label>
                                    <div>
                                    <input type="password"/>
                                    {
                                        isVisible ? <VisibilityIcon onClick={()=>setShowCredential(false)}/> : <VisibilityOffIcon onClick={()=>setShowCredential(true)}/>
                                    }
                                    </div>
                                    <button type='submit'>Login</button>
                                </form>
                                <p>New User ? <button onClick={()=>{setSignupOpen(true), setLoginOpen(false)}}>Register now</button></p>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default LoginModal
