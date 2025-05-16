import React from 'react'
import { Box, Typography } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import GavelIcon from '@mui/icons-material/Gavel';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const StyledImage = styled.img`
@media (max-width: 1040px) {
   display:none;
  }
`;
export const Footer = () => {
  return (
    <Box className='Container' sx={{color:'white',backgroundColor:'#444658',width:'100%',height:'auto',marginTop:"2rem",marginBottom:"-2rem"}}>
        <Box sx={{display:"flex",'@media(max-width:750px)':{display:'flex',flexDirection:"column"}}}>
            <Box className='footerlist' sx={{display:'flex', flexDirection:'column'}}>
        <ul>
            <li style={{textDecoration:'none',listStyle:'none' ,textAlign:'left',textAlign:'justify',fontSize:'19px',paddingTop:"1rem",fontWeight:'bolder'}}>API Mashup Composer</li>
            <li style={{textDecoration:'none',listStyle:'none',textAlign:'left',textAlign:'justify',paddingTop:'1.5rem',marginRight:'2rem',fontSize:'19px'}}>Where Data-Driven Insights Meet API Integration <br/>for Smarter Development.</li>
        </ul>
         </Box>
         <div style={{display:'flex',flexDirection:'column',marginLeft:'2rem'}}>
         <ul sx={{marginTop:'3rem'}}>
         <li style={{textDecoration:'none',listStyle:'none' ,textAlign:'left',textAlign:'justify',fontSize:'19px',paddingTop:"1rem"}}>
            <Link to="/contact" style={{textDecoration:'none',color:'white',fontSize:'16px',textAlign:'left',display:'flex'}} onMouseOver={(e)=>e.target.style.color='lightgray'} onMouseOut={(e)=>e.target.style.color='white'}><ContactPageIcon sx={{margin:'0 5px' , fontSize:'17px'}}/>Contact Us</Link></li>
         <li style={{textDecoration:'none',listStyle:'none' ,textAlign:'left',textAlign:'justify',fontSize:'19px',paddingTop:"1rem"}}>
         <Link to="/about" style={{textDecoration:'none',color:'white',fontSize:'16px',textAlign:'left',display:'flex'}}onMouseOver={(e)=>e.target.style.color='lightgray'} onMouseOut={(e)=>e.target.style.color='white'}><InfoIcon sx={{margin:'0 5px',fontSize:'17px'}}/>About Us</Link></li>
         <li style={{textDecoration:'none',listStyle:'none' ,textAlign:'left',textAlign:'justify',fontSize:'19px',paddingTop:"1rem"}}>
         <Link to="/termsofservices" style={{textDecoration:'none',color:'white',fontSize:'16px',textAlign:'left',display:'flex'}}onMouseOver={(e)=>e.target.style.color='lightgray'} onMouseOut={(e)=>e.target.style.color='white'}><GavelIcon sx={{margin:'0 5px', fontSize:'17px'}}/>Terms of Services</Link></li>
         <li style={{textDecoration:'none',listStyle:'none' ,textAlign:'left',textAlign:'justify',fontSize:'19px',paddingTop:"1rem"}}>
         <Link to="/privacypolicy" style={{textDecoration:'none',color:'white',fontSize:'16px',textAlign:'left',display:'flex'}}onMouseOver={(e)=>e.target.style.color='lightgray'} onMouseOut={(e)=>e.target.style.color='white'}><PrivacyTipIcon sx={{margin:'0 5px', fontSize:'17px'}}/>Privacy Policy</Link></li>
         </ul>
        </div>
        <div>

        </div>
        <StyledImage src='src/Assets/logo.png' style={{width:'240px',height:'150px',marginTop:'2rem',marginLeft:"5rem"}} alt='logo'/>
        </Box>
        <Typography sx={{textAlign:'center',fontSize:'14px',paddingTop:'1rem',paddingBottom:"1rem"}}>&copy; 2025 API Mashup Composer. All Rights Reserved</Typography>
    </Box>
  )
}
