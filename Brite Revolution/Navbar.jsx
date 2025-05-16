import React, { useState } from 'react';
import { AppBar, Button, Drawer, IconButton, Stack, Box, Toolbar, Typography, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: '1370px',
        height:"120px",
        backgroundColor: 'black',
        '@media (max-width: 900px)': {
          width: '100%',
          height:"80px",
          marginLeft: '0', 
        },
      }}
    >
      <Toolbar>


        <Divider style={{xs:"none", sm:"none",md:"none", color:"white"}}/>
       
        <Typography
          variant="h1"
          sx={{
            backgroundColor: "black",
            color: 'white',
            fontWeight:"bolder",
            marginLeft: '3rem',
            height: '62px',
            width: '250px',
            paddingTop:"-2.5rem",
            paddingLeft:"2rem",
            fontSize: { xs: '1.7rem', sm: '2rem', md: '2rem', lg: '2.5rem' }, 
            '@media (max-width: 900px)': {
                paddingTop:"1rem"
              },
           
          }}
        >
          Brite Revolution
        </Typography>
       
        <IconButton
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', md: 'none' }, marginLeft: 'auto' }} 
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
          <div style={{display:"grid"}}> 
        <Box
          
            sx={{
            display: { xs: 'none', md: 'flex' }, 
            marginLeft: 'auto',
          }}
        >
          <Button color='inherit' style={{ fontSize: '14px',  color:"white", paddingTop:"1rem" ,marginLeft:"5rem"}}>Home</Button>
          <div style={ {
            height: '2rem',
            marginTop:"1.5rem",
            color:"#646D77",
             backgroundColor: '#646D77',
             width: '1px',
             margin: '0.5rem',
             }}></div>
          <Button color="inherit" style={{ fontSize: '14px',  color:"white",paddingTop:"1rem" }}>Blog</Button>
          <div style={ {
             height: '2rem',
             marginTop:"1.5rem",
            color:"#646D77",
             backgroundColor: '#646D77',
             width: '1px',
             margin: '0.5rem',
             }}></div>
          <Button color="inherit" style={{ fontSize: '14px',  color:"white" ,paddingTop:"1rem"}}>Causes</Button>
          <div style={ {
             height: '2rem',
             marginTop:"1.5rem",
            color:"#646D77",
             backgroundColor: '#646D77',
             width: '1px',
             margin: '0.5rem',
             }}></div>
          <Button color="inherit" style={{ fontSize: '14px',  color:"white" ,paddingTop:"1rem"}}>FAQ</Button>
          <div style={ {
           height: '2rem',
           marginTop:"1.5rem",
            color:"#646D77",
             backgroundColor: '#646D77',
             width: '1px',
             margin: '0.5rem',
             }}></div>
          <Button color="inherit" style={{ fontSize: '14px',  color:"white",paddingTop:"1rem" }}>Artist</Button>
          <div style={ {
            height: '2rem',
            marginTop:"1.5rem",
            color:"#646D77",
             backgroundColor: '#646D77',
             width: '1px',
             margin: '0.5rem',
             }}></div>
          <Button color="inherit" style={{ fontSize: '14px',  color:"white",paddingTop:"1rem" }}>Features</Button>
          <div style={ {
           height: '2rem',
           marginTop:"1.5rem",
            color:"#646D77",
             backgroundColor: '#646D77',
             width: '1px',
             margin: '0.5rem',
             }}></div>
          <Button color="inherit" style={{ fontSize: '14px',  color:"white",paddingTop:"1rem" }}>Privacy Policy</Button>
          <div style={ {
           height: '2rem',
           marginTop:"1.5rem",
            color:"#646D77",
             backgroundColor: '#646D77',
             width: '1px',
             margin: '0.5rem',
             }}></div>
          <Button color="inherit" style={{ fontSize: '14px',  color:"white" ,paddingTop:"1rem"}}>Support</Button>
          </Box>
          <Box    
          sx={{
            display: { xs: 'none', md: 'flex' }, 
            marginLeft: 'auto',
          }}>
          <Button color="inherit" style={{ fontSize: '14px',  color:"white",paddingTop:"1rem",marginLeft:"-46rem" }}>Terms and Conditions</Button>
          <div style={ {
           height: '2rem',
           marginTop:"1.3rem",
            color:"#646D77",
             backgroundColor: '#646D77',
             width: '1px',
             margin: '0.5rem',
             }}></div>
          <Button color="inherit" style={{ fontSize: '14px',  color:"white",paddingTop:"1rem" }}>About</Button>

    
          
        </Box>
</div>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          sx={{ display: { xs: 'block', md: 'block' ,} }} 
        >
          <Stack direction="column" spacing={2} sx={{ padding: '20px' }}>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>Home</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>Blog</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>Causes</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>FAQ</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>Artist</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>Features</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>Privacy Policy</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>Terms and Conditions</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>About</Button>
          </Stack>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

