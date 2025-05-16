import { Box, Button,IconButton, Typography,Divider, AppBar,Stack,Toolbar,Drawer, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import React from 'react'
import { useState } from 'react';
 import Logo from "../Assets/Logo.png";
import Menu from "../Assets/Menu.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';
import { Mainimg } from './Mainimg';


export const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };
  return (
    <div>
          <Box  sx={{ backgroundColor:"black",color:"white", width:'100%',height:"58vh",
            '@media (max-width:500px)':{
              width:"480px"
            },
            '@media (min-width:500px) and (max-width:600px)':{
              width:"580px"
            },
            '@media (min-width:600px) and (max-width:700px)':{
              width:"680px"
            },
            '@media (min-width:700px) and (max-width:850px)':{
              width:"820px"
            },
            '@media (min-width:850px) and (max-width:950px)':{
                  width:"920px"
                },
            '@media (min-width:950px) and (max-width:1050px)':{
                  width:"1010px"
            }
          }}>
            <Button sx={{backgroundColor:"#EB0045", color:"white" , fontSize:"20px",
                marginTop:"3rem",
                marginLeft:"41.5rem",
                '@media (max-width:500px)':{
                 marginLeft:"5rem"
                },
                '@media (min-width:500px) and (max-width:600px)':{
                  marginLeft:"8rem"
                },
                '@media (min-width:600px) and (max-width:700px)':{
                  marginLeft:"11rem"
                },
                '@media (min-width:700px) and (max-width:850px)':{
                  marginLeft:"14rem"
                },
                '@media (min-width:850px) and (max-width:950px)':{
                  marginLeft:"17rem"
                },
                '@media (min-width:950px) and (max-width:1050px)':{
                  marginLeft:"20rem"
            }
            }}>
               JOIN THE MILLION WHO FOLLOW <br/>US
            </Button>
            <Typography sx={{fontSize:"17px", marginLeft:"25rem",marginTop:"5px",textAlign:'center', 
             '@media (max-width:500px)':{
              marginLeft:"2rem"
            },
            '@media (min-width:500px) and (max-width:600px)':{
              marginLeft:"2rem"
            },
            '@media (min-width:600px) and (max-width:700px)':{
              marginLeft:"1rem"
            },
            '@media (min-width:700px) and (max-width:850px)':{
                  marginLeft:"-1.7rem"
                },
                '@media (min-width:850px) and (max-width:950px)':{
                  marginLeft:"-2rem"
                },
                '@media (min-width:950px) and (max-width:1050px)':{
                  marginLeft:"-3rem"
            }
            }}>
                FOLLOW US FOR MUST SEE LAS VEGAS<br/>EXPERIENCE
            </Typography>
            <IconButton sx={{marginLeft:"43rem",
               '@media (max-width:500px)':{
                marginLeft:"7rem"
              },
              '@media (min-width:500px) and (max-width:600px)':{
                marginLeft:"10rem"
              },
              '@media (min-width:600px) and (max-width:700px)':{
                marginLeft:"12rem"
              },
              '@media (min-width:700px) and (max-width:850px)':{
                  marginLeft:"16rem"
                },
                '@media (min-width:850px) and (max-width:950px)':{
                  marginLeft:"19rem"
                },  '@media (min-width:950px) and (max-width:1050px)':{
                  marginLeft:"22rem"
            }
            }}>
        
            <InstagramIcon sx={{ color:"white", backgroundColor:"#EB0045", borderRadius:"25px",padding:"7px",marginRight:"6px"}}/>
            <FacebookIcon sx={{color:"white" , backgroundColor:"#EB0045" , borderRadius:"25px",padding:"7px",marginRight:"6px"}}/>
            <YouTubeIcon sx={{color:"white" , backgroundColor:"#EB0045" , borderRadius:"25px",padding:"7px",marginRight:"6px"}}/>
            <XIcon  sx={{color:"white" , backgroundColor:"#EB0045" , borderRadius:"25px",padding:"7px",marginRight:"6px"}}/>
            <WhatsAppIcon sx={{color:"white" , backgroundColor:"#EB0045" , borderRadius:"25px",padding:"7px" ,marginRight:"6px"}}/>
            <TelegramIcon sx={{color:"white" , backgroundColor:"#EB0045" , borderRadius:"25px",padding:"7px"}}/>
            </IconButton>
            <Divider sx={{borderColor:"gray",marginTop:"1rem",marginLeft:"2rem",marginRight:"2rem",marginBottom:"0.8rem" }}/>
      <AppBar
      position="static"
      sx={{
        width: '1260px',
        height:"60px",
        backgroundColor:"black",
        '@media (max-width: 900px)': {
          width: '100%',
          height:"80px",
          marginLeft: '0', 
        },
        '@media (max-width:500px)':{
          width:"480px"
        },
        '@media (min-width:500px) and (max-width:600px)':{
          width:"580px"
        },
        '@media (min-width:600px) and (max-width:700px)':{
          width:"680px"
        },
        '@media (min-width:700px) and (max-width:850px)':{
          width:"820px"
        },
        '@media (min-width:850px) and (max-width:950px)':{
              width:"920px"
            },
        '@media (min-width:950px) and (max-width:1050px)':{
              width:"1010px"
        }
      }}
    >
      <Toolbar>       
        <Typography
          variant="h1"
          sx={{
            marginLeft: '1rem',
            fontSize: { xs: '1.7rem', sm: '2rem', md: '2rem', lg: '2.5rem' },            
          }}
        >
          <img src={Logo} alt="logo" style={{height:"80px"}}/>
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
          <Button color='inherit' style={{ fontSize: '15px',  color:"white",
            marginLeft:"12rem"}}>Hotel & Casinos</Button>
          <Button color="inherit" style={{ fontSize: '15px',  color:"white"}}>Shows</Button>
          
          <Button color="inherit" style={{ fontSize: '15px',  color:"white" }}>Restaurants</Button>
          
          <Button color="inherit" style={{ fontSize: '15px',  color:"white" }}>Thing To Do</Button>
        
          <Button color="inherit" style={{ fontSize: '15px',  color:"white" }}>Weddings</Button>
      
          <Button color="inherit" style={{ fontSize: '15px',  color:"white" }}>Sports</Button>
         
          <Button color="inherit" style={{ fontSize: '10px',  color:"white",marginLeft:"5rem"}}><LanguageIcon/>English<KeyboardArrowDownIcon/></Button>
       
          <Button color="inherit" style={{ fontSize: '15px',  color:"white" }}>
            <img src={Menu} alt="menu" style={{height:"45px"}}/>
          </Button>
          </Box>
          <Box    
          sx={{
            display: { xs: 'none', md: 'flex' }, 
            marginLeft: 'auto',
          }}>
          
        </Box>
</div>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          sx={{ display: { xs: 'block', md: 'block' ,} }} 
        >
          <Stack direction="column" spacing={2} sx={{ padding: '20px' }}>
          <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}><TextField label="Search Menu"/></Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>Hotel & Casinos</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>Shows</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>Restaurants</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>Things To Do</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>Weddings</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}>Sports</Button>
            <Button color="inherit" onClick={toggleDrawer} style={{ fontSize: '18px' }}><LanguageIcon/>English<KeyboardArrowDownIcon/></Button>
          </Stack>
        </Drawer>
      </Toolbar>
    </AppBar>
          <Mainimg/>

        </Box>
    </div>
  )
}
