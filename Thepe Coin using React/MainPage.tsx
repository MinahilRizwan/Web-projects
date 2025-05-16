import { Typography } from '@mui/material'
import { Navbar } from '../Components/Navbar'


export const MainPage = () => {
  return (
    <div>
        <Navbar/>
        <Typography variant='h1' textAlign="center" fontWeight="lighter" fontFamily='Patrick Hand' color='black' marginTop='-5rem'> Welcome to <i style={{fontFamily:'Genty demo'}}>Thepe Coin!</i> </Typography>
             <Typography variant='h3' textAlign="center" fontFamily='Patrick Hand' color='black' marginTop="-1rem" fontWeight='lighter'>The Future of Crypthocurrency... With a Thmile!</Typography>
        <img src='src/Assets/PAGE.jpeg' alt='main page' width="1250px"/>
    </div>
  )
}
