import { Divider, Button , Stack, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from 'react'
import '../Styles/Footerstyle.css'
export const Footer = () => {
  return (
    <div class="main">
        <Divider/>
        <Stack direction={{sx:"column",xs:"column",md:"row",lg:"row"}} sx={{color:"white", marginLeft:"2.3rem"}} style={{marginTop:"5rem"}}>
            <Stack direction="column">
            <Typography variant='h6' style={{marginLeft:"3rem"}}>Recent Updates</Typography>
        <ul style={{listStyle:"none",textDecoration:"none"}}>
            <li> 02/10/2020 <Button >HardBoiled4 </Button></li>
            <li> 02/10/2020 <Button >HardBoiled3 </Button></li>
            <li> 02/10/2020 <Button >HardBoiled2 </Button></li>
            <li> 02/10/2020 <Button >HardBoiled1 </Button></li>
        </ul></Stack>

        <Stack direction="column">
            <Typography variant='h6' style={{marginLeft:"3.5rem"}}>Tasty Links</Typography>
        <ul style={{listStyle:"none",textDecoration:"none"}}>
            <li> <Button>Lorem ipsum dolor sit amet. </Button></li>
            <li> <Button>Lorem ipsum dolor sit amet consectetur. </Button></li>
            <li> <Button>Lorem ipsum dolor sit amet.</Button> </li>
            <li> <Button>Lorem ipsum dolor sit amet.</Button></li>
        </ul></Stack>

        <Stack direction="column">
            <Typography variant='h6' style={{marginLeft:"2.6rem"}}>Other Places</Typography>
        <ul style={{listStyle:"none",textDecoration:"none"}}>
            <li><TwitterIcon /> <Button>Twitter </Button></li>
            <li> <FacebookIcon/> <Button>Facebook </Button></li>
            <li> <LinkedInIcon/> <Button>LinkedIn</Button> </li>
            <li> <WhatsAppIcon/> <Button> Whatsapp</Button></li>
        </ul></Stack>

        <Stack direction="column">
            <br/>
        
        <ul style={{listStyle:"none",textDecoration:"none",marginTop:"24px"}}>
            <li><TwitterIcon /> <Button>Twitter </Button></li>
            <li> <FacebookIcon/> <Button>Facebook </Button></li>
            <li> <LinkedInIcon/> <Button>LinkedIn</Button> </li>
            <li> <WhatsAppIcon/> <Button> Whatsapp</Button></li>
        </ul></Stack>

        <Stack direction="column">
            <Typography variant='h6' style={{marginLeft:"3rem"}}>Peer Respect</Typography>
        <ul style={{listStyle:"none",textDecoration:"none"}}>
            <li> <Button>Lorem ipsum  </Button></li>
            <li> <Button>Lorem ipsum  </Button></li>
            <li> <Button>Lorem ipsum </Button> </li>
            <li> <Button>Lorem ipsum </Button></li>
        </ul></Stack>
        </Stack>
    </div>
    
  )
}
