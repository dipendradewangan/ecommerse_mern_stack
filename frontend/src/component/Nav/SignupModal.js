import { Box, Modal} from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button'
import "./authModal.css"
import ecommerseAuthImg from '../images/ecommerse-auto-img.jpg'


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

const SignupModal = ({ signupOpen, setSignupOpen, setLoginOpen }) => {



    return (
        <>
            <Modal
                open={signupOpen}
                onClose={() => setSignupOpen(false)}
            >
                <Box sx={style}>
                    <div className='authModalContainer'>
                        <div className='logo-side flex justify-center items-center'>
                            <img className='ecommerse-auto-img' src={ecommerseAuthImg} alt='login-logo' />
                        </div>
                        <div className='form-side flex justify-center items-center flex-col'>
                            <h1 className='text-center font-medium text-3xl mb-10'>Welcome to Ecommerse</h1>
                            <div className='login-form-box w-96'>
                                <h1 className='font-medium text-2xl mb-5 text-center'>Register now</h1>
                                <form id="signupForm"  className='flex flex-col gap-2 px-6'>
                                    <label className='authFormLabel'>Name</label>
                                    <input className='authFormInput' type="text" />
                                    <label className='authFormLabel'>Email</label>
                                    <input className='authFormInput' type="email" />
                                    <label className='authFormLabel'>Mobile</label>
                                    <input className='authFormInput' type="number" />
                                    <label className='authFormLabel'>password</label>
                                    <input className='authFormInput' type="password" />
                                    
                                
                                    <Button  className='center' variant="contained" color="success" type='submit' sx={{margin : "20px auto",marginTop: 1, width : "100px"  }}>Signup</Button>
                                </form>
                                <p>Allready Signed up?<Button onClick={()=>{setLoginOpen(true); setSignupOpen(false);}} sx={{ textTransform: "capitalize", textDecoration : "underline"}} color="primary">Login now!</Button></p>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default SignupModal
