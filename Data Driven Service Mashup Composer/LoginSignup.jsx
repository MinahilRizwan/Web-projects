import { Box } from '@mui/material'
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';


export const LoginSignup = () => {
    const [action , setAction]=useState("Login");
  return (
    <Box sx={{backgroundColor:"#444658",position:'static',paddingTop:"1rem",paddingBottom:"1rem"}}>
    <Box sx={{justifyContent:'center',justifyItems:'center'}}>
    <Box className='container' sx={{display:'flex',marginLeft:'3rem',flexDirection:"column",marginTop:'34px',marginBottom:"27px",backgroundColor:'#ffff',paddingBottom:'-10px',paddingTop:'30px', width:'410px','@media screen and (max-width:1040px)':{marginLeft:'0rem'}}}>
        <div className='header'>
            <div className="text" style={{fontSize:'39px',fontWeight:'bolder'}}>{action}</div>
        </div>
        <div className='submit-container' style={{display:'flex',gap:'25px',margin:'28px auto'}}>
        <div  style={
action === "SignUp"?{
      justifyContent: "center",
      alignItems: "center",
      width: "162px",
      height: "35px",
      color: "black",
      backgroundColor: "#eaeaea", 
      borderRadius: "50px",
      fontSize: "17px",
      fontWeight: "650",
      cursor: "pointer",
      paddingTop: "15px"
    }
  : {
      justifyContent: "center",
      alignItems: "center",
      width: "162px",
      height: "35px",
      color: "#ffff",
      backgroundColor: "#444658",
      borderRadius: "50px",
      fontSize: "17px",
      fontWeight: "650",
      cursor: "pointer",
      paddingTop: "15px"
     }
} onClick={()=>{setAction("Login")}}> Login</div>
    <div style={ action === "Login"?{
      justifyContent: "center",
      alignItems: "center",
      width: "162px",
      height: "35px",
      color: "black",
      backgroundColor: "#eaeaea",
      borderRadius: "50px",
      fontSize: "17px",
      fontWeight: "650",
      cursor: "pointer",
      paddingTop: "15px",
    }
  : {
      justifyContent: "center",
      alignItems: "center",
      width: "162px",
      height: "35px",
      color: "#ffff",
      backgroundColor: "#444658",
      borderRadius: "50px",
      fontSize: "17px",
      fontWeight: "650",
      cursor: "pointer",
      paddingTop: "15px",
    }
}onClick={()=>{setAction("SignUp")}}> SignUp </div>
    </div>
        <div className="inputs" style={{marginTop:'10px'}}>
           {action==="Login"?<div></div>:<div className="input" style={{display:"flex",alignItems:'center',margin:'auto',width:'380px',height:'60px',backgroundColor:'#eaeaea',borderRadius:'6px'}}>
                <PersonIcon style={{margin:'0px 30px'}}/>
                <input type='text' placeholder='Name' style={{height:'50px',width:'400px',background:'transparent',border:'none',outline:'none',color:'#797979',fontSize:'16px'}}/>
            </div>} 
            <div className="input" style={{display:"flex",alignItems:'center',margin:'auto',width:'380px',height:'60px',backgroundColor:'#eaeaea',borderRadius:'6px',marginTop:'20px'}}>
                <EmailIcon style={{margin:'0px 30px'}}/>
                <input type='email' placeholder='Email' style={{height:'50px',width:'400px',background:'transparent',border:'none',outline:'none',color:'#797979',fontSize:'16px'}}/>
            </div>
            <div className="input" style={{display:"flex",alignItems:'center',margin:'auto',width:'380px',height:'60px',backgroundColor:'#eaeaea',borderRadius:'6px',marginTop:'20px'}}>
                <LockIcon style={{margin:'0px 30px'}}/>
                <input type='password' placeholder='Password' style={{height:'50px',width:'400px',background:'transparent',border:'none',outline:'none',color:'#797979',fontSize:'16px'}}/>
            </div>
        </div>
        {action==="SignUp"?<div></div>: <div className="forgot-password" style={{marginTop:'23px',marginLeft:'-10rem',color:'#797979',fontSize:'14px'}}>
            Haven't Registered Yet? <button style={{color:'#4c00b4',outline:'none', border:'none', fontSize:'14px'}}>SignUp!</button>
        </div>}
        <Link to='/home' style={{textDecoration:'none'}}>
        <button style={{  justifyContent: "center",display:'flex',
      alignItems: "center",
      width: "150px",
      height: "47px",
      color: "#ffff",
      backgroundColor: "#444658",
      borderRadius: "55px",
      fontSize: "17px",
      fontWeight: "650",
      cursor: "pointer",
      paddingTop: "2px",paddingLeft:'1rem',marginBottom:'25px',outline:'none',borderColor:"#444658",marginTop:'20px',marginLeft:'14rem'}} > Submit <ArrowForwardIcon style={{margin:'0px 5px'}}/></button>
  </Link>
    </Box>
</Box>
</Box>
  )
}
