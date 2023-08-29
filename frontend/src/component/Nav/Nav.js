import React, { useState } from 'react'
import { Button } from '@mui/material'
import SpeedDialComponent from './SpeedDialComponent';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import logo from "../images/logo.png"

const isLogged = false


const Nav = () => {

    const [loginOpen, setLoginOpen] = useState(false)
    const [signupOpen, setSignupOpen] = useState(false)
    return (
        <>
            <nav className='flex justify-between p-4 border-4 relative items-center'>
                <div className='logo'>
                    <img alt='logo' style={{width : "150px"}} src={logo }/>
                </div>
                <ul className='flex font-bold gap-5' id='menu'>
                    <li>
                        <a href='/'>
                            <Button variant='text' color='secondary' sx={{ width: 'auto', paddingX: 5, height: 60, fontSize: 25, fontWeight: "bold", textTransform: 'capitalize' }}>Home</Button>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <Button variant='text' color='secondary' sx={{ width: 'auto', paddingX: 5, height: 60, fontSize: 25, fontWeight: "bold", textTransform: 'capitalize' }}>Services</Button>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <Button variant='text' color='secondary' sx={{ width: 'auto', paddingX: 5, height: 60, fontSize: 25, fontWeight: "bold", textTransform: 'capitalize' }}>About</Button>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <Button variant='text' color='secondary' sx={{ width: 'auto', paddingX: 5, height: 60, fontSize: 25, fontWeight: "bold", textTransform: 'capitalize' }}>Portpholio</Button>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <Button variant='text' color='secondary' sx={{ width: 'auto', paddingX: 5, height: 60, fontSize: 25, fontWeight: "bold", textTransform: 'capitalize' }}>Contect Us</Button>
                        </a>
                    </li>

                </ul>

                <div className='flex gap-5'>
                    {
                        isLogged ? (
                            <SpeedDialComponent />
                        ) : (
                            <>
                                <Button onClick={() => setLoginOpen(true)} color="secondary" size="large" variant="outlined" sx={{ width: 120, height: 60, fontSize: 20 }}>Login</Button>
                                <Button onClick={() => setSignupOpen(true)} color="secondary" size="large" variant="contained" sx={{ width: 120, height: 60, fontSize: 20, marginRight: 2 }}>Signup</Button>
                            </>
                        )
                    }
                </div>

                <LoginModal loginOpen={loginOpen} setLoginOpen={setLoginOpen} setSignupOpen={setSignupOpen} />
                <SignupModal signupOpen={signupOpen} setSignupOpen={setSignupOpen} setLoginOpen={setLoginOpen} />
            </nav>

        </>
    )
}

export default Nav

// bgcolor: deepOrange[500],