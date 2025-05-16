import { Box,  Button,  IconButton,  Typography } from '@mui/material'
import '../Styles/Videocardstyle.css';
import React from 'react'
import Logo from '../Assets/Logo.png';
import Img1 from "../Assets/pexels-capturedbyaugustine-19533219.jpg";
import Img2 from "../Assets/pexels-ivan-samkov-8951146.jpg";
import Img3 from "../Assets/pexels-mikhail-nilov-8093577.jpg";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Steak from "../Assets/Steak.png";
import Buffet from "../Assets/Bufft.png";
import Italian from "../Assets/Italian.png";
import Mexican from "../Assets/Mexican.png";
import Outdoor from "../Assets/Outdoor.png";
import Vegan from "../Assets/Vegan.png";
import View from "../Assets//ViewAll.png";


 import { useState } from 'react';
export const VegasHotspot = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalDots = 6;
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0',
      },
      dot: {
        height: '15px',
        width: '15px',
        margin: '0 5px',
        backgroundColor: '#bbb',
        borderRadius: '50%',
        display: 'inline-block',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      },
      activeDot: {
        backgroundColor: '#888',
      },
    };
  return (
    <>
        <Typography  variant="h4" sx={{textAlign:"center", color:"black",
            marginTop:"11rem",
            fontWeight:"bolder",
        }}>
        Which #Vegas Hotspot Are You Heading To
        </Typography>
        <Box sx={{display:"flex",marginLeft:"5rem", marginRight:"5rem",marginTop:"3rem"
            ,"@media(max-width:1000px)":{
                flexDirection:"column"
            }
        }}>
            <IconButton> <NavigateBeforeIcon sx={{border:"1px solid black",borderRadius:"50%",color:"black",padding:"5px",marginRight:"5px",
                "@media(max-width:1000px)":{
                    display:"none"
                }
            }}/></IconButton>
        <div className="video-card">
      <div className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="verified-badge">✔</span>
      </div>
      <img 
        src={Img1} 
        className="video" 
        
      ></img>
      <div className="text-overlay">
        <p className="sub-caption">
          We ask Gordon Ramsay what's for dinner...
        </p>
      </div>
    </div>
    <div className="video-card">
      <div className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="verified-badge">✔</span>
      </div>
      <img
        src={Img2} 
        className="video" 
       
      ></img>
    </div>
    <div className="video-card">
      <div className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="verified-badge">✔</span>
      </div>
      <img
        src={Img3} 
        className="video" 
        
      ></img>
    </div>
    <IconButton><NavigateNextIcon sx={{border:"1px solid black",borderRadius:"50%",color:"black",padding:"5px",
         "@media(max-width:1000px)":{
            display:"none"
        }
    }}/></IconButton>
        </Box>
        <div style={styles.container}>
      {Array.from({ length: totalDots }).map((_, index) => (
        <span
          key={index}
          style={{
            ...styles.dot,
            ...(index === activeIndex ? styles.activeDot : {}),
          }}
          onClick={() => setActiveIndex(index)} 
        ></span>
      ))}
    </div>
    <Typography variant='h4' sx={{marginLeft:"8rem",fontWeight:"bolder", marginTop:"3rem", marginBottom:"3rem",
        "@media(max-width:850px)":{
            textAlign:'center'
        }
    }}>
        Las Vegas Restaurants and Bars
    </Typography>
    <Box sx={{display:"flex",marginLeft:"11rem",
    "@media(max-width:700px)":{
        flexDirection:"column"
    },
     "@media(min-width:700px) and (max-width:750px)":{
        marginLeft:"1rem"
    },  "@media(min-width:750px) and (max-width:850px)":{
        marginLeft:"2rem"
    },
    "@media(min-width:850px) and (max-width:950px)":{
        marginLeft:"3rem"
    }
    }}>
        <Button><img src={Steak} alt="steak"/></Button>
        <Button><img src={Buffet} alt="Buffet"/></Button>
        <Button><img src={Italian} alt="italian"/></Button>
        <Button><img src={Mexican} alt="Mexiacn" style={{paddingTop:"1.5rem"}}/></Button>
        <Button><img src={Vegan} alt="Vegan" style={{paddingTop:"1rem"}}/></Button>
        <Button><img src={Outdoor} alt="Outdoor" style={{paddingTop:"1rem"}}/></Button>
        <Button><img src={View} alt="view" style={{paddingTop:"1rem"}}/></Button>

    </Box>
    </>
  )
}
