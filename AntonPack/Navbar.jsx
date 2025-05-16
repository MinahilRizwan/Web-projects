import React, { useState } from 'react';
import { AppBar, Button, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: '1180px',
        marginLeft: '5rem',
        backgroundColor: '#4E525D',
        '@media (max-width: 1200px)': {
          width: '100%',
          marginLeft: '0', 
        },
      }}
    >
      <Toolbar>
       
        <Typography
          variant="h4"
          sx={{
            backgroundColor: '#2B2C30',
            color: 'white',
            marginLeft: '-1.5rem',
            height: '62px',
            width: '250px',
            textAlign: 'center',
            paddingTop: '19px',
            fontSize: { xs: '1.7rem', sm: '2rem', md: '2rem', lg: '2.5rem' }, 
           
          }}
        >
          Anton Peck
        </Typography>

      
        <Typography
          variant="h6"
          color="#A7AAB1"
          sx={{
            marginLeft: '7px',
            fontSize: { xs: '1.5rem', sm: '1.7rem', md: '2rem', lg: '2.2rem' }, 
            
          }}
        >
          Digital Artist
        </Typography>

       
        <IconButton
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', md: 'none' }, marginLeft: 'auto' }} 
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: { xs: 'none', md: 'flex' }, 
            marginLeft: 'auto',
          }}
        >
          <Button color="inherit" style={{ fontSize: '18px' }}>Art</Button>
          <Button color="inherit" style={{ fontSize: '18px' }}>Journal</Button>
          <Button color="inherit" style={{ fontSize: '18px' }}>About</Button>
          <Button color="inherit" style={{ fontSize: '18px' }}>Contact</Button>
        </Stack>

        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          sx={{ display: { xs: 'block', md: 'none' } }} 
        >
          <Stack direction="column" spacing={2} sx={{ padding: '20px' }}>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>Art</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>Journal</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>About</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>Contact</Button>
          </Stack>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

