import React from 'react'
import { Button, Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'

const Nav = () => {
    return (
        <>
            <nav className='flex justify-between px-4'>
                <ul className='flex font-bold gap-5' id='menu'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Home</a></li>
                </ul>

                <div className='flex gap-5'>
                    {
                        true ? (
                            true
                                ? (<Avatar sx={{ width: 60, height: 60, fontSize: 20 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />)
                                : (<Avatar sx={{ bgcolor: deepOrange[500], width: 60, height: 60, fontSize: 20 }}>N</Avatar>)


                        ) : (
                            <>
                                <Button color="secondary" size="large" variant="outlined" sx={{ width: 120, height: 60, fontSize: 20 }}>Login</Button>
                                <Button color="secondary" size="large" variant="contained" sx={{ width: 120, height: 60, fontSize: 20 }}>Signup</Button>
                            </>
                        )
                    }
                </div>
            </nav>

        </>
    )
}

export default Nav
