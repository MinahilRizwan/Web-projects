import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import car from '../Assets/car.jpg'
import React from 'react';
 import '../Styles/Cardstyle.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
</style>


export const Cards = () => {
  return (
    <Stack  direction={{xs: "column" , sm: "column", md:"column",lg:"row"}} sx={{marginTop:"5rem"}}> 
        <Box width="600px" height="350px" bgcolor="#262827" sx={{marginLeft:"5rem",width:"600px", height:"300px",backgroundColor:'#2D2E30',
            '@media(max-width:600px)':{
                marginLeft:"2rem",
                width:"500px",

            },
            '@media(min-width:600px) and (max-width:700px)':{
                marginLeft:"4rem",
                width:"550px",

            },
            '@media(min-width:700px) and (max-width:750px)':{
                marginLeft:"5rem",
                width:"600px",

            },
            '@media(min-width:750px) and (max-width:850px)':{
                marginLeft:"8rem",
                width:"550px",

            },
            '@media(min-width:850px) and (max-width:950px)':{
                marginLeft:"10rem",
                width:"600px",

            },
            '@media(min-width:950px) and (max-width:1100px)':{
                marginLeft:"15rem",
                width:"600px",

            },
            '@media(min-width:1100px) and (max-width:1200px)':{
                marginLeft:"20rem",
                width:"600px",

            }
        }}>
            <Card sx={{ backgroundColor:"#2D2E30"}}> 
                <Stack  spacing={2} direction="row" style={{backgroundColor:'#222423',height:"60px"}}>
                    <Typography variant='h6' color='white' paddingTop="1rem" paddingLeft='2rem' fontFamily="Oswald"> HardBoiled 4</Typography>
                    <Typography variant='body1' color='white' paddingTop="1rem" paddingLeft='13rem' fontFamily="Oswald"> February 2nd, 2020</Typography>
                </Stack>
                <CardMedia>
                    <img  src={car} alt='HardBoiled' style={{width:'450px',height:"275px", padding:"1.3rem", paddingLeft:'4rem',
                        '@media (max-width: 700px)': {
          width: '350px', 
          height: '250px', 
          padding: '3rem',
                      }  }}/>
                </CardMedia>
            </Card>
     </Box>
     <Card  sx={{marginLeft:'1rem',marginRight:"2.3rem", backgroundColor:"#2D2E30",
        '@media(max-width:600px)':{
                marginTop:"9rem",
                width:"500px",
                marginLeft:"1.5rem"
        },
        '@media(min-width:600px) and (max-width:700px)':{
            marginLeft:"4rem",
            width:"555px",
            marginTop:"9rem",

        },
        '@media(min-width:700px) and (max-width:750px)':{
            marginLeft:"5rem",
            width:"600px",
            marginTop:"9rem",

        },
        '@media(min-width:750px) and (max-width:850px)':{
            marginLeft:"8rem",
            width:"550px",
            marginTop:"9rem"

        },
        '@media(min-width:850px) and (max-width:950px)':{
            marginLeft:"10rem",
            width:"600px",
            marginTop:"9rem"

        },
        '@media(min-width:950px) and (max-width:1100px)':{
            marginLeft:"15rem",
            width:"600px",
            
        },
        '@media(min-width:1100px) ':{
            marginLeft:"3rem",
            width:"570px",
        }
     }} >
            <Stack  spacing={2} direction="row" style={{backgroundColor:"#222423",height:"60px"}}>
                    <Typography variant='h6' color='white' paddingTop="1rem" paddingLeft='2rem' fontFamily="Oswald" textAlign='justify'> A Cosmic Conversation</Typography>
                    <Typography variant='body1' color='white' paddingTop="1rem" paddingLeft='11rem' fontFamily="Oswald" textAlign='justify'> February 9th, 2010</Typography>
            </Stack>
            <CardContent>
                    <Typography variant='body1' bgcolor='#2D2E30' color='white' textAlign='justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad a voluptates doloribus voluptate corrupti expedita repudiandae, molestias totam ex sint odit iusto consectetur voluptas facere? Dolores odit necessitatibus animi ex earum placeat ullam sint iste quod fugiat nostrum nobis facilis natus obcaecati voluptatum saepe possimus nisi, libero rem sit ipsum? Ipsam, incidunt in magni quia odit libero eum atque velit totam necessitatibus! Facilis, omnis. Voluptatum eos suscipit quae ut atque? Quis quisquam cum minima ullam quas aut, pariatur, officiis distinctio modi expedita dolores illo hic, ducimus blanditiis nesciunt! Eligendi, iste! Pariatur reiciendis commodi doloribus consectetur neque, et quia quas.</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{textAlign:"right"}}>READ THE FULL ENTRY</Button>
            </CardActions>
    </Card>
        
    </Stack>
  )
}
