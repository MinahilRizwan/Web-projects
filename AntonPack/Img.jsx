import React from 'react'
import mushroom from '../Assets/mushroom.jpg'
import { Box } from '@mui/material'
import '../Styles/Imgstyle.css';

export const Img = () => {
  return (
    <Box   sx={{
      marginTop: "5rem", 
      marginLeft: "5rem",
    }} >
        <img src={mushroom} alt="main"  />
    </Box>
  )
}
