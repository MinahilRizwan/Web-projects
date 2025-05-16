import { Button, IconButton, Stack, Typography } from '@mui/material'
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';

export const Navbar = () => {
  return (
    <div style={{ backgroundImage:`url('src/Assets/Head.png')`,height:'200px' , width:"1250px",
        backgroundSize:'cover'
    }}>
     <Stack direction="row" sx={{paddingTop:"2.5rem"}}>
        <Button sx={{ fontFamily: 'Patrick Hand' , borderColor:'black' ,borderRadius:'19px' , color:'black' ,
            fontWeight:'500px', border:'2px solid black',width:"100px",backgroundColor:"white",
            marginLeft:"5rem"
        }}>Menu</Button>

        <Typography variant='h4' textAlign="center" sx={{fontStyle:'Genty demo' ,fontFamily: 'Genty demo',
            marginLeft:"23rem",color:"black"
        }}>Thepe</Typography>

        <IconButton sx={{borderRadius:"25px" , backgroundColor:"black",color:"white",marginLeft:"19rem"}}><XIcon/></IconButton>

        <IconButton  sx={{borderRadius:"25px" , backgroundColor:"black",color:"white",marginLeft:'7px'}}><TelegramIcon/></IconButton>

        <Button sx={{width:'150px', backgroundColor:'#049434', color:"black",fontFamily: 'Patrick Hand',
            borderRadius:"19px",borderColor:"black", border:"2px solid black", alignContent:"Right",alignItems:'right',
            marginLeft:'7px'
         }}>Buy Now</Button>
    </Stack>
    </div>
  )
}
