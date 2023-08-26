import React, { useState } from 'react'
import { Button } from '@mui/material'
import SpeedDialComponent from './SpeedDialComponent';

const logged = false


const Nav = () => {

    const [modelOpen, setModalOpen] = useState(false)
    return (
        <>
            <nav className='flex justify-between p-4 border-4 relative'>
                <div className='logo'>
                    <img alt='logo' src='../images/logo.png' />
                </div>
                <ul className='flex font-bold gap-5' id='menu'>
                    <li>
                        <a href='/'>
                            <Button variant='text' color='secondary' sx={{ width: 'auto', paddingX: 5, height: 60, fontSize: 25, fontWeight: "bold", textTransform: 'capitalize' }}>Home</Button>
                        </a>
                    </li>

                </ul>

                <div className='flex gap-5'>
                    {
                        logged ? (
                            <SpeedDialComponent />
                        ) : (
                            <>
                                <Button onClick={()=>setModalOpen(!modelOpen)} color="secondary" size="large" variant="outlined" sx={{ width: 120, height: 60, fontSize: 20 }}>Login</Button>
                                <Button color="secondary" size="large" variant="contained" sx={{ width: 120, height: 60, fontSize: 20, marginRight: 2 }}>Signup</Button>
                            </>
                        )
                    }
                </div>

            </nav>

        </>
    )
}

export default Nav

// bgcolor: deepOrange[500],