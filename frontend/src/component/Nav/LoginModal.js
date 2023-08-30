import { Box, Modal, Button } from '@mui/material'
import React, { useState } from 'react'
import "./authModal.css"
import ecommerseAuthImg from '../images/ecommerse-auto-img.jpg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const style = {
    background: "white",
    position: "relative",
    top: "5vmin",
    margin: "0 auto",
    width: "70%",
    tansform: "translate(-50%, -50%)",
    boder: "none",
    borderRadius : "10px",
    boxShadow : "0px 34px 40px black"
}



const LoginModal = ({ loginOpen, setLoginOpen, setSignupOpen }) => {

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
                <div className='authModalContainer'>
                        <div className='logo-side flex justify-center items-center'>
                            <img className='ecommerse-auto-img' src={ecommerseAuthImg} alt='login-logo' />
                        </div>
                        <div className='form-side flex justify-center items-center flex-col'>
                            <h1 className='text-center font-medium text-3xl mb-10'>Welcome to Ecommerse</h1>
                            <div className='login-form-box w-96'>
                                <h1 className='font-medium text-2xl mb-5 text-center'>Login now</h1>
                                <form className='flex flex-col gap-2 px-6'>
                                    <label className='authFormLabel'>Email</label>
                                    <input className='authFormInput' type="email" />
                                    <label className='authFormLabel'>password</label>
                                    <div>

                                    <input className='authFormInput' type={isVisible ? "password" : "text"} />
                                    {
                                        isVisible ? <VisibilityIcon onClick={()=>setShowCredential(false)}/> : <VisibilityOffIcon onClick={()=>setShowCredential(true)}/>
                                    }
                                    </div>
                                    
                                
                                    <Button className='center' variant="contained" color="success" type='submit' sx={{margin : "20px auto",marginTop: 1, width : "100px"  }}>Login</Button>
                                </form>
                                <p>New user?<Button sx={{ textTransform: "capitalize", textDecoration : "underline"}} color="primary">Signup now!</Button></p>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default LoginModal
