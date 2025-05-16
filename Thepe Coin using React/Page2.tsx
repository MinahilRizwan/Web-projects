import { Box, Button, Stack, Typography } from "@mui/material"


export const Page2 = () => {
  return (
    <div  style={{backgroundImage:`url('src/Assets/Back1.jpg')`, height:"600px",width:"1250px",justifyContent:"center",alignItems:"center",justifyItems:"center",alignContent:"center"}}>
        <Box sx={{height:"480px",width:"1100px", backgroundColor:"#049434",alignContent:"center",borderRadius:"14px",position:"sticky",marginLeft:"4.5rem" }}>
            <Stack direction="row" >
                <div className="left">
                    <Typography variant="h1" color="white" fontFamily='Patrick Hand' marginLeft="2rem" marginTop="-3rem">What ith
                        <Typography variant="h1" color="white" fontFamily='Genty demo'>Thepe Coin?</Typography></Typography>
                        <Typography variant="h6" color="white" fontFamily={"Patrick Hand"} marginLeft="2rem">Welthum to the world of Thepe Coin, the digital currenthy that'th here to<br/> revoluthonize the way you think about money! With Thepe Coin, we're not<br/> juth offering you another crypto; we're giving you a whole new way to thmile.</Typography>
                        <Button sx={{color:"black",width:"300px",height:"60px",border:"3px solid black",fontFamily:"Patrick Hand",borderRadius:"27px",backgroundColor:"white", marginLeft:"2rem",fontSize:"19px",marginTop:"3rem"}}>Join  <i style={{fontFamily:'Genty demo',padding:"5px",fontWeight:"bolder"}}> Thepe's </i>  Community</Button>

                </div>
                <div className="right">
                    <img src="src/Assets/Frog.jpg" alt="frog" style={{marginLeft:"8rem",height:"380px",width:"330px", borderRadius:"17px"}}/>
                </div>
            </Stack>
        </Box>
    </div>
  )
}
