import React from 'react'
import { Button, Avatar, SpeedDial, SpeedDialAction } from '@mui/material'
import { deepOrange, purple } from '@mui/material/colors'
import { SpeedDialIcon } from '@mui/material'


const Nav = () => {
    return (
        <>
            <nav className='flex justify-between p-4 border-4 relative'>
                <ul className='flex font-bold gap-5' id='menu'>
                    <li>
                        <a href='/'>
                            <Button variant='text' color='secondary' sx={{ width: 'auto', paddingX: 5, height: 60, fontSize: 25, fontWeight: "bold", textTransform: 'capitalize' }}>Home</Button>
                        </a>
                    </li>

                </ul>

                <div className='flex gap-5'>
                    {
                        true ? (
                            <>
                                {/* <Button variant='text' color='secondary' sx={{ width: 'auto', height: "auto", borderRadius: '50%', padding: 0 }}>
                                    <Avatar color="secondary" sx={{ bgcolor: purple[200], width: 60, height: 60, fontSize: 20, padding: 0 }} alt="dipendra Sharp" src="https://opengaph.githubassets.com/f290141da99370fb020ae1894bed592867c05e4871087e18c32a37a1b2d4cf79/mui/material-ui/issues/3510" />
                                </Button> */}
                                <SpeedDial
                                    direction='down'
                                    ariaLabel="SpeedDial basic example"
                                    sx={{ position: 'absolute', right :15}}
                                    icon={<Avatar color="secondary" sx={{ bgcolor: purple[200], width: 60, height: 60, fontSize: 20, padding: 0 }} alt="dipendra Sharp" src="https://opengaph.githubassets.com/f290141da99370fb020ae1894bed592867c05e4871087e18c32a37a1b2d4cf79/mui/material-ui/issues/3510" />}
                                >

                                    <SpeedDialAction
                                        key={"key"}
                                    />
                                    <SpeedDialAction
                                        key={"key"}
                                    />
                                    <SpeedDialAction
                                        key={"key"}
                                    />
                                    <SpeedDialAction
                                        key={"key"}
                                    />



                                </SpeedDial>
                            </>

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

// bgcolor: deepOrange[500],