import { Box, Backdrop, SpeedDial, SpeedDialAction, Avatar } from '@mui/material';
import { purple } from '@mui/material/colors';
import React, { useState } from 'react'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


const isAdmin = false;


// speed dial activity api
const actions = [
  {
    icon: <ManageAccountsIcon />,
    title: "Account"
  },
  {
    icon: <ShoppingCartIcon />,
    title: "Cart"
  },
  {
    icon: <LocalShippingIcon />,
    title: "Orders"
  },
  {
    icon: <AccountCircleIcon />,
    title: "Profile"
  }
]



// exported component
const SpeedDialComponent = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
        <Backdrop open={open} />
        <SpeedDial
          direction='down'
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: 'absolute', top: 0, right: 16}}
          icon={<Avatar color="secondary" sx={{ bgcolor: purple[100], width: 60, height: 60, fontSize: 20, padding: 0 }} alt="guddu Sharp" src="https://opengaph.githubassets.com/f290141da99370fb020ae1894bed592867c05e4871087e18c32a37a1b2d4cf79/mui/material-ui/issues/3510" />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {
            actions.map((action) =>
              <SpeedDialAction
                
                key={"key"}
                icon={action.icon}
                tooltipTitle={action.title}
                tooltipOpen
                onClick={handleClose}
              />

            )

          }

          {
            isAdmin 
            ? (
              <SpeedDialAction
                
                key={"key"}
                icon={<DashboardIcon/>}
                tooltipTitle={"Dashboard"}
                tooltipOpen
                onClick={handleClose}
              />
            ):''
          }



        </SpeedDial>
      </Box>
    </>
  )
}

export default SpeedDialComponent
