import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import {Mail, Notifications} from "@mui/icons-material";
import { AppBar, styled, Box, Toolbar, Typography, InputBase, Badge, Avatar, Menu, MenuItem  } from '@mui/material'
import React, { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});

const Search = styled("div")(({theme})=>({
  backgroundColor: "#fff",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled(Box)(({theme})=>({
  display:"none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}))

const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))


const Navbar = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <AppBar position="sticky" color='success'>
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>MrSanchez Dev</Typography>
        <IntegrationInstructionsIcon sx={{display:{xs:"block",sm:"none"}}}/>
        <Search>
          <InputBase placeholder='search...'/>
        </Search>
        <Icons>
        <Badge badgeContent={4} color="error">
          <Mail />
        </Badge>  
        <Badge badgeContent={4} color="error">
          <Notifications />
        </Badge>
          <Avatar 
            sx={{width:30,height:30}} 
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            onClick={handleClick}
          />  
        </Icons>
        <UserBox onClick={handleClick}>
          <Avatar 
            sx={{width:30,height:30}} 
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />  
          <Typography variant='span'>Jane</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClick}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar