import { Box,  Button,  Divider,  List,  ListItem,  Stack,  TextField,  Typography } from '@mui/material'
import MyBookie from '../Assets/img.jpg';
import React from 'react'

export const Blog = () => {
  return (<>
    <Box sx={{marginTop:"3rem",display:"flex",marginLeft:"5rem",'@media(max-width:900px)':{
        marginLeft:"1.5rem",
        flexDirection:"column"
    }}}> 
    <div >
        <Typography variant='h3' sx={{color:"white",fontWeight:"bolder"}}>How Music and Weather effects the result of gambling online</Typography>
        <Typography variant='body1' sx={{color:"white", marginTop:"2rem"}}>
        A group of scientists led by Dr. Manuel Anglada-Tort, Lecturer at the Department of Music and leader of the Music, Culture, and Cognition Lab (MCC) at the University of Oxford, have discovered a rather fascinating relationship between the weather conditions in Great Britain and listeners’ musical preferences. They evaluated more than 23,000 chart hits from the past 70 years. Surprisingly or not, they found that danceable, emotionally positive melodies and pulsating rhythms are automatically associated with warmer temperatures. Environmental influences like warm and sunny weather evoke positive emotions, thereby affecting the listeners’ choice of music. On the other hand, melancholic songs are mostly associated with autumn and winter.
        <br/>
        <br/>
        The researchers analyzed historical weather data and official weather charts from the Met Office in terms of the daytime temperatures, hours of sunshine, and the number of rainy days. Aided by machine learning technology, the next step was to analyze and classify the musical attributes of the songs.
       <br/>
       <br/>
       All the more, doubts remain about the results and interpretation, especially since the study is limited to the weather and musical preferences in Great Britain – a notoriously rainy country.
        </Typography>
      <img src={MyBookie} alt='main' style={{width:"500px",height:"350px",marginTop:"3rem"}}/>
        <Typography variant='body1' sx={{color:"white", marginTop:"2rem"}}>
        All the more, doubts remain about the results and interpretation, especially since the study is limited to the weather and musical preferences in Great Britain – a notoriously rainy country. Between those long stretches of drizzling rain, how did all the positive feel-good music by British bands and artists come about? That said, the methods used could also be applied to evaluate similar relationships in other countries with different climatic conditions. It would surely be interesting to find out how the weather affects musical preferences in other countries and regions.
        While they found a correlation between the weather conditions and the commercial success of songs in the charts, the researchers around Dr. Anglada-Tort point out that this does not indicate or prove a causal relationship. They are aware that the results must be taken with a grain of salt, especially since the current state of research also allows for completely different explanations such as the effect of playlists curated by popular streaming services.
        <br/>
        <br/>
        <i style={{fontWeight:"bold", fontSize:"18px"}}>Still an interesting approach</i><br/><br/>
        Without a doubt, music producers and artists have an interest to publish their songs at the best time possible. Numerous factors play an important role in deciding whether a song becomes a success or failure. This begins with the overall mood in society as determined by current events, and it goes well beyond the current trends. When it comes to streaming services, even the time of day can play a role in determining the number of plays. All things considered, it is somewhat unlikely that the weather alone is responsible for commercial success. Nevertheless, it is an interesting consideration for music industry strategists.
       <br/>
       <br/>
       <i style={{fontWeight:"bold", fontSize:"18px"}}>Summer Nights was actually published in the summer</i><br/><br/>
       In any case, the study proved used a highly complex procedure and thorough analysis to prove that summer hits were in fact published in summer. What’s more, the Oxford researchers were even able to verify that cheerful, highly energetic songs like “Summer Nights” by John Travolta and Olivia Newton John were published during the summer months. Surprise! Don’t we all know the puzzled stares of bystanders when we start singing “All Summer Long” or “Summer Dreaming” in the pouring rain? Likewise, humming “Raindrops (are falling on my head)“ in the blazing sunshine is sure to turn heads.
        </Typography>
        
        
    </div>
    <div>
        <Box sx={{ width:"350px",height:"1050px",backgroundColor:"black",color:"white", marginRight:"5rem",marginLeft:"2rem",
       '@media(max-width:900px)':{
        width:"460px",
        marginLeft:"0.45rem",
        marginTop:"2rem"
       }
       }}>
            <Stack direction="row">
        <TextField
      label="Search..."
      variant="outlined"
      marginTop="2rem"
      style={{marginTop:"2rem",marginLeft:"1.5rem"}}
      InputLabelProps={{
        style: { color: 'gray'}, 
      }}
      InputProps={{
        style: { borderColor: 'gray' },
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'gray',
          },
          '&:hover fieldset': {
            borderColor: 'gray', 
          },
          '&.Mui-focused fieldset': {
            borderColor: 'gray',
          },
        },
      }}
    />
        <Button sx={{backgroundColor:"purple", color:'white',borderRadius:"25px",height:"50px",width:"65px",marginLeft:"1rem",marginTop:"2rem"}}>Go</Button>
        </Stack>
        <Divider sx={{borderColor:"gray",margin:"1rem" }}/>

        <Typography variant='h6' marginLeft="1.5rem">Features</Typography>
        <List >
        <ListItem><Button href='#' color='secondary' >Articles</Button></ListItem>
        <ListItem><Button href='#' color='secondary' >Reviews</Button></ListItem>
        <ListItem><Button href='#' color='secondary' >Spotlight</Button></ListItem>
        </List>
        <Divider sx={{borderColor:"gray",margin:"1rem" }}/>
        <Typography variant='h6' marginLeft="1.5rem">New Revolution</Typography>
        <List >
        <ListItem><Button href='#' color='secondary' >The Existence of Sbobet until now</Button></ListItem>
        <ListItem><Button href='#' color='secondary' >cera Hindari Kambeghya Preminiya poker online</Button></ListItem>
        </List>
        <Divider sx={{borderColor:"gray",margin:"1rem" }}/>
        <Typography variant='h6' marginLeft="1.5rem">From The Blog</Typography>
        <Typography variant='h4' marginLeft="1.5rem" marginRight="1rem" fontWeight="bold">Gorgeous New Avett Brother Song</Typography>
        <Typography variant='body1' marginLeft="1.5rem" marginTop="1rem">Did you catch this? we've got covered. Prepared to weep. Tags: The Once and Future Carpenters(CMT unplugged) The Avett Brothers...</Typography>
        <Typography variant='h4' marginLeft="1.5rem" marginRight="1rem" fontWeight="bold" marginTop="2rem">St. Vincent Covers Tom Waits</Typography>
        <Typography variant='body1' marginLeft="1.5rem" marginTop="1rem">Big Black Mariah from the house of tom waits as performed by st.vincents? yes live from London feww nights ago</Typography>
        </Box>
    </div>
    </Box>
    <Divider sx={{borderColor:"gray",marginTop:"1rem" }}/>
    <Box sx={{backgroundColor:"black",color:"white", height:"50px"}}>
      <Typography variant='body2' textAlign="center" paddingTop="1rem">
        Copyright @ 2024 All Rights reserved-Brite Revolution
      </Typography>
    </Box>
    </>
  )
}
