import React from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CustomizedMenus from "./CustomizedMenus";
import { Link } from 'react-router-dom';


function Nar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href="/"
          >
            <HomeIcon />
            <Typography variant="h6" component="div">
              Home
            </Typography>
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}/>
            
          <Button href='/Barrios' color="inherit">Barrio</Button>
          <Button href='/Ciudades' color="inherit">Ciudad</Button>
          <Button href="/profesiones" color="inherit">Profesion</Button>
          <CustomizedMenus/>
        </Toolbar>
      </AppBar>

    </Box>
  )
}

export default Nar