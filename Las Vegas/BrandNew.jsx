import { Box, Button, Stack, Typography ,IconButton, ImageList, ImageListItem, ImageListItemBar, Card, CardContent} from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import imj from '../Assets/2.jpg';
import imj1 from '../Assets/2.jpg';
import imj2 from '../Assets/Buffet.png';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import InstagramIcon from '@mui/icons-material/Instagram';



export const BrandNew = () => {
    const styles = {
        card: {
          width: '300px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          overflow: 'hidden',
          marginRight:"0.8rem",
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          fontFamily: 'Arial, sans-serif',
        },
        image: {
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        },
        category: {
          position: 'absolute',
          bottom: '3px',
          left: '2px',
          backgroundColor: '#000',
          color: '#fff',
          padding: '5px 10px',
          fontSize: '12px',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          borderRadius: '4px',
        },
        content: {
          padding: '20px',
        },
        title: {
          fontSize: '18px',
          fontWeight: 'bold',
          margin: '10px 0',
        },
        reviews: {
          display: 'flex',
          alignItems: 'center',
          margin: '10px 0',
        },
        reviewIcon: {
          width: '20px',
          height: '20px',
          marginRight: '5px',
        },
        reviewText: {
          fontSize: '14px',
          color: '#555',
        },
        location: {
          fontSize: '14px',
          color: '#777',
          margin: '10px 0',
        },
        buttons: {
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
        },
        button: {
          padding: '10px 15px',
          border: '1px solid #000',
          borderRadius: '4px',
          background: 'transparent',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        },
        quickView: {
          display: 'flex',
          alignItems: 'center',
        },
        quickViewText: {
          marginRight: '1rem',
        },
        quickViewIcon: {
          color: '#6f42c1',
          marginRight:"1rem"
        },
      };
  return (
    <>
    <Stack spacing={1} direction="row" marginTop="3rem" >
        <Box sx={{backgroundColor:"black",color:"white",width:"200px",height:"60px"}}>
            <Typography sx={{fontSize:"30px" , fontWeight:"bolder",textAlign:"center",padding:"5px"}}>
                Brand New
            </Typography>
        </Box>      
        <Button sx={{color:"black"
        }}>
            View All <NavigateNextIcon/>
        </Button>  
    </Stack>
    <Box sx={{display:"flex",  marginLeft:"8rem",marginTop:"2rem","@media(max-width:1000px)":{
        flexDirection:"column"
    }}}>
        <IconButton> <NavigateBeforeIcon sx={{border:"1px solid black",borderRadius:"50%",color:"black",padding:"5px",marginRight:"5px"
                ,"@media(max-width:1000px)":{
                    display:"none"
                }
            }}/></IconButton>
    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Beerhaus</div>
        <div style={styles.reviews}>
        <ThumbUpOffAltIcon/>
        <ThumbDownOffAltIcon/>
          <span style={styles.reviewText}>474 reviews</span>
        </div>
        <div style={styles.location}>On-Strip</div>

    
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>



    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj1}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Jaide @16</div>
        <div style={styles.reviews}>
      
          <span style={styles.reviewText}>SE and Handerson</span>
        </div>
        <div style={styles.location}>On-Strip</div>
        
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>


    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj2}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Kallisto Oyster Bars</div>
        <div style={styles.reviews}>
        <span style={styles.reviewText}>Northwest and Summerlin</span>
        </div>
        <div style={styles.location}>On-Strip</div>

    
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>
    <IconButton><NavigateNextIcon sx={{border:"1px solid black",borderRadius:"50%",color:"black",padding:"5px",
         "@media(max-width:1000px)":{
            display:"none"
        }
    }}/></IconButton>
    </Box>


    <Stack spacing={1} direction="row" marginTop="3rem" >
        <Box sx={{backgroundColor:"black",color:"white",width:"350px",height:"60px"}}>
            <Typography sx={{fontSize:"30px" , fontWeight:"bolder",textAlign:"center",padding:"5px"}}>
                Celebrity Restaurants
            </Typography>
        </Box>      
        <Button sx={{color:"black"
        }}>
            View All <NavigateNextIcon/>
        </Button>  
    </Stack>
    <Box sx={{display:"flex",  marginLeft:"8rem",marginTop:"2rem","@media(max-width:1000px)":{
        flexDirection:"column"
    }}}>
        <IconButton> <NavigateBeforeIcon sx={{border:"1px solid black",borderRadius:"50%",color:"black",padding:"5px",marginRight:"5px"
                ,"@media(max-width:1000px)":{
                    display:"none"
                }
            }}/></IconButton>
    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Beerhaus</div>
        <div style={styles.reviews}>
        <ThumbUpOffAltIcon/>
        <ThumbDownOffAltIcon/>
          <span style={styles.reviewText}>474 reviews</span>
        </div>
        <div style={styles.location}>On-Strip</div>

    
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>



    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj1}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Jaide @16</div>
        <div style={styles.reviews}>
      
          <span style={styles.reviewText}>SE and Handerson</span>
        </div>
        <div style={styles.location}>On-Strip</div>
        
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>


    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj2}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Kallisto Oyster Bars</div>
        <div style={styles.reviews}>
        <span style={styles.reviewText}>Northwest and Summerlin</span>
        </div>
        <div style={styles.location}>On-Strip</div>

    
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>
    <IconButton><NavigateNextIcon sx={{border:"1px solid black",borderRadius:"50%",color:"black",padding:"5px",
         "@media(max-width:1000px)":{
            display:"none"
        }
    }}/></IconButton>
    </Box>
    <Stack spacing={1} direction="row" marginTop="3rem" >
        <Box sx={{backgroundColor:"black",color:"white",width:"300px",height:"60px"}}>
            <Typography sx={{fontSize:"30px" , fontWeight:"bolder",textAlign:"center",padding:"5px"}}>
                Bars & Lounges
            </Typography>
        </Box>      
        <Button sx={{color:"black"
        }}>
            View All <NavigateNextIcon/>
        </Button>  
    </Stack>
    <Box sx={{display:"flex",  marginLeft:"8rem",marginTop:"2rem","@media(max-width:1000px)":{
        flexDirection:"column"
    }}}>
        <IconButton> <NavigateBeforeIcon sx={{border:"1px solid black",borderRadius:"50%",color:"black",padding:"5px",marginRight:"5px"
                ,"@media(max-width:1000px)":{
                    display:"none"
                }
            }}/></IconButton>
    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Beerhaus</div>
        <div style={styles.reviews}>
        <ThumbUpOffAltIcon/>
        <ThumbDownOffAltIcon/>
          <span style={styles.reviewText}>474 reviews</span>
        </div>
        <div style={styles.location}>On-Strip</div>

    
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>



    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj1}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Jaide @16</div>
        <div style={styles.reviews}>
      
          <span style={styles.reviewText}>SE and Handerson</span>
        </div>
        <div style={styles.location}>On-Strip</div>
        
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>


    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj2}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Kallisto Oyster Bars</div>
        <div style={styles.reviews}>
        <span style={styles.reviewText}>Northwest and Summerlin</span>
        </div>
        <div style={styles.location}>On-Strip</div>

    
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>
    <IconButton><NavigateNextIcon sx={{border:"1px solid black",borderRadius:"50%",color:"black",padding:"5px",
         "@media(max-width:1000px)":{
            display:"none"
        }
    }}/></IconButton>
    </Box>
    <Stack spacing={1} direction="row" marginTop="3rem" >
        <Box sx={{backgroundColor:"black",color:"white",width:"300px",height:"60px"}}>
            <Typography sx={{fontSize:"30px" , fontWeight:"bolder",textAlign:"center",padding:"5px"}}>
                For The Foodies
            </Typography>
        </Box>      
        <Button sx={{color:"black"
        }}>
            View All <NavigateNextIcon/>
        </Button>  
    </Stack>
    <Box sx={{display:"flex",  marginLeft:"8rem",marginTop:"2rem","@media(max-width:1000px)":{
        flexDirection:"column"
    }}}>
        <IconButton> <NavigateBeforeIcon sx={{border:"1px solid black",borderRadius:"50%",color:"black",padding:"5px",marginRight:"5px"
                ,"@media(max-width:1000px)":{
                    display:"none"
                }
            }}/></IconButton>
    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Beerhaus</div>
        <div style={styles.reviews}>
        <ThumbUpOffAltIcon/>
        <ThumbDownOffAltIcon/>
          <span style={styles.reviewText}>474 reviews</span>
        </div>
        <div style={styles.location}>On-Strip</div>

    
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>



    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj1}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Jaide @16</div>
        <div style={styles.reviews}>
      
          <span style={styles.reviewText}>SE and Handerson</span>
        </div>
        <div style={styles.location}>On-Strip</div>
        
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>


    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj2}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Kallisto Oyster Bars</div>
        <div style={styles.reviews}>
        <span style={styles.reviewText}>Northwest and Summerlin</span>
        </div>
        <div style={styles.location}>On-Strip</div>

    
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>
    <IconButton><NavigateNextIcon sx={{border:"1px solid black",borderRadius:"50%",color:"black",padding:"5px",
         "@media(max-width:1000px)":{
            display:"none"
        }
    }}/></IconButton>
    </Box>
    <Typography variant="h4" textAlign="center" fontWeight="bolder" sx={{marginTop:"3rem"}}>
        Las Vegas NightLife and Day Clubs
    </Typography>
    <Stack spacing={1} direction="row" marginTop="3rem" >
        <Box sx={{backgroundColor:"black",color:"white",width:"250px",height:"60px"}}>
            <Typography sx={{fontSize:"30px" , fontWeight:"bolder",textAlign:"center",padding:"5px"}}>
                Night Clubs
            </Typography>
        </Box>      
        <Button sx={{color:"black"
        }}>
            View All <NavigateNextIcon/>
        </Button>  
    </Stack>
    <Box sx={{display:"flex",  marginLeft:"8rem",marginTop:"2rem","@media(max-width:1000px)":{
        flexDirection:"column"
    }}}>
        <IconButton> <NavigateBeforeIcon sx={{border:"1px solid black",borderRadius:"50%",color:"black",padding:"5px",marginRight:"5px"
                ,"@media(max-width:1000px)":{
                    display:"none"
                }
            }}/></IconButton>
    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Beerhaus</div>
        <div style={styles.reviews}>
        <ThumbUpOffAltIcon/>
        <ThumbDownOffAltIcon/>
          <span style={styles.reviewText}>474 reviews</span>
        </div>
        <div style={styles.location}>On-Strip</div>

    
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>



    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj1}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Jaide @16</div>
        <div style={styles.reviews}>
      
          <span style={styles.reviewText}>SE and Handerson</span>
        </div>
        <div style={styles.location}>On-Strip</div>
        
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>


    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj2}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Kallisto Oyster Bars</div>
        <div style={styles.reviews}>
        <span style={styles.reviewText}>Northwest and Summerlin</span>
        </div>
        <div style={styles.location}>On-Strip</div>

    
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>
    <IconButton><NavigateNextIcon sx={{border:"1px solid black",borderRadius:"50%",color:"black",padding:"5px",
         "@media(max-width:1000px)":{
            display:"none"
        }
    }}/></IconButton>
    </Box>


    <Stack spacing={1} direction="row" marginTop="3rem" >
        <Box sx={{backgroundColor:"black",color:"white",width:"280px",height:"60px"}}>
            <Typography sx={{fontSize:"30px" , fontWeight:"bolder",textAlign:"center",padding:"5px"}}>
                Renowned DJs
            </Typography>
        </Box>      
        <Button sx={{color:"black"
        }}>
            View All <NavigateNextIcon/>
        </Button>  
    </Stack>
    <Box sx={{display:"flex",  marginLeft:"8rem",marginTop:"2rem","@media(max-width:1000px)":{
        flexDirection:"column"
    }}}>
        <IconButton> <NavigateBeforeIcon sx={{border:"1px solid black",borderRadius:"50%",color:"black",padding:"5px",marginRight:"5px"
                ,"@media(max-width:1000px)":{
                    display:"none"
                }
            }}/></IconButton>
    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Beerhaus</div>
        <div style={styles.reviews}>
        <ThumbUpOffAltIcon/>
        <ThumbDownOffAltIcon/>
          <span style={styles.reviewText}>474 reviews</span>
        </div>
        <div style={styles.location}>On-Strip</div>

    
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>



    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj1}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Jaide @16</div>
        <div style={styles.reviews}>
      
          <span style={styles.reviewText}>SE and Handerson</span>
        </div>
        <div style={styles.location}>On-Strip</div>
        
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>


    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj2}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Kallisto Oyster Bars</div>
        <div style={styles.reviews}>
        <span style={styles.reviewText}>Northwest and Summerlin</span>
        </div>
        <div style={styles.location}>On-Strip</div>

    
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>
    <IconButton><NavigateNextIcon sx={{border:"1px solid black",borderRadius:"50%",color:"black",padding:"5px",
         "@media(max-width:1000px)":{
            display:"none"
        }
    }}/></IconButton>
    </Box>


    <Stack spacing={1} direction="row" marginTop="3rem" >
        <Box sx={{backgroundColor:"black",color:"white",width:"200px",height:"60px"}}>
            <Typography sx={{fontSize:"30px" , fontWeight:"bolder",textAlign:"center",padding:"5px"}}>
                Day Clubs
            </Typography>
        </Box>      
        <Button sx={{color:"black"
        }}>
            View All <NavigateNextIcon/>
        </Button>  
    </Stack>
    <Box sx={{display:"flex",  marginLeft:"8rem",marginTop:"2rem","@media(max-width:1000px)":{
        flexDirection:"column"
    }}}>
        <IconButton> <NavigateBeforeIcon sx={{border:"1px solid black",borderRadius:"50%",color:"black",padding:"5px",marginRight:"5px"
                ,"@media(max-width:1000px)":{
                    display:"none"
                }
            }}/></IconButton>
    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Beerhaus</div>
        <div style={styles.reviews}>
        <ThumbUpOffAltIcon/>
        <ThumbDownOffAltIcon/>
          <span style={styles.reviewText}>474 reviews</span>
        </div>
        <div style={styles.location}>On-Strip</div>

    
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>



    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj1}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Jaide @16</div>
        <div style={styles.reviews}>
      
          <span style={styles.reviewText}>SE and Handerson</span>
        </div>
        <div style={styles.location}>On-Strip</div>
        
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>


    <div style={styles.card}>
      
      <div style={{ position: 'relative' }}>
        <img
          src={imj2}
          alt="Beerhaus"
          style={styles.image}
        />
        <div style={styles.category}>Restaurants</div>
      </div>

      <div style={styles.content}>
        <div style={styles.title}>Kallisto Oyster Bars</div>
        <div style={styles.reviews}>
        <span style={styles.reviewText}>Northwest and Summerlin</span>
        </div>
        <div style={styles.location}>On-Strip</div>

    
        <div style={styles.buttons}>
          <button style={styles.button}>Read More</button>
          <div style={styles.quickView}>
            <span style={styles.quickViewText}>Quick View</span>
            <span style={styles.quickViewIcon}>👁</span>
          </div>
        </div>
      </div>
    </div>
    <IconButton><NavigateNextIcon sx={{border:"1px solid black",borderRadius:"50%",color:"black",padding:"5px",
         "@media(max-width:1000px)":{
            display:"none"
        }
    }}/></IconButton>
    </Box>


    <Box sx={{backgroundColor:"#EB0045",color:"white",width:"600px",height:"60px",
      "@media(max-width:700px)":{
        width:'100%'
      }
    }}>
            <Typography sx={{fontSize:"30px" , fontWeight:"bolder",textAlign:"center",padding:"5px",
               "@media(max-width:700px)":{
                fontSize:"28px"
              },
              "@media(max-width:500px)":{
                fontSize:"22px"
              }
            }}>
                Dont Forget To Make The Reservations
            </Typography>
        </Box> 
        <Box sx={{display:"flex","@media(max-width:900px)":{
          flexDirection:"column                         "
        }}}>
            <Box sx={{width:"450px",height:"52vh", backgroundColor:"black",color:"white","@media(max-width:900px)":{
              width:'100%'
            }}}>
             <Typography textAlign="center" variant="h6" marginTop="6rem">EVER ASK OURSELF WHAT'S HAPPENING,<br/> MEANWHILE IN VEGAS...? WE GOT YOU</Typography> 
             <Button sx={{backgroundColor:"#EB0045", color:"white",left:"35%",placeContent:"center",marginTop:"1rem"}}><InstagramIcon/> Follow</Button>
            </Box>
            <ImageList sx={{ width: '900px', height: '292px', marginLeft:"5px" 
              ,"@media(max-width:600px)":{
                width:"100%"
              }
            }} cols={4} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            position="top"
          />
        </ImageListItem>
      ))}
    </ImageList>
        </Box>
        <Box sx={{display:"flex",'@media(max-width:700px)':{
          flexDirection:"column"
        }}}>
          <Box sx={{width:"300px",height:"130px",backgroundColor:"black",fontWeight:"bolder",color:"white",
            '@media(min-width:700px) and (max-width:900px)':{
             height:"180px"
        },
        '@media(max-width:600px)':{
         width:"100%"
     }
          }}>
            <Typography variant='h4' textAlign="center" marginTop='1.5rem'>CAN'T MISS EAT AND DRINK</Typography>
          </Box>
          <Card sx={{width:'240px',marginLeft:"3rem"  ,  '@media(max-width:600px)':{
             marginLeft:"0",
             width:'100%'
        },
         '@media(max-width:800px)':{
          marginLeft:"1rem"
             }
     }}>
            <CardContent>
              <Typography variant='-body2'>-Eat and Drink</Typography>
              <Typography variant='body1' fontWeight="bolder">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quis illum ratione?</Typography>
            </CardContent>
          </Card>

          <Card sx={{width:'240px',marginLeft:"1rem",  '@media(max-width:600px)':{
             width:'100%'
        }}}>
            <CardContent>
              <Typography variant='-body2'>-Things To Do</Typography>
              <Typography variant='body1' fontWeight="bolder">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quis illum ratione?</Typography>
            </CardContent>
          </Card>

          <Card sx={{width:'240px',marginLeft:"1rem",  '@media(max-width:600px)':{
             width:'100%'
        }}}>
            <CardContent>
              <Typography variant='-body2'>-Entertainment</Typography>
              <Typography variant='body1' fontWeight="bolder">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quis illum ratione?</Typography>
            </CardContent>
          </Card>
        </Box >

    </>
  )
}

const itemData = [
  {
    img: 'https://www.allrecipes.com/thmb/mvO1mRRH1zTz1SvbwBCTz78CRJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-_PzrCRZPnEo-1hB4BMofk6LAvJN0hSGCQ&s',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tTQrjhZaFg2eVYE6K0o7AqL0T1caTGuU0g&s',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://www.allrecipes.com/thmb/mvO1mRRH1zTz1SvbwBCTz78CRJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-_PzrCRZPnEo-1hB4BMofk6LAvJN0hSGCQ&s',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tTQrjhZaFg2eVYE6K0o7AqL0T1caTGuU0g&s',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://www.allrecipes.com/thmb/mvO1mRRH1zTz1SvbwBCTz78CRJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-_PzrCRZPnEo-1hB4BMofk6LAvJN0hSGCQ&s',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tTQrjhZaFg2eVYE6K0o7AqL0T1caTGuU0g&s',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://www.allrecipes.com/thmb/mvO1mRRH1zTz1SvbwBCTz78CRJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-_PzrCRZPnEo-1hB4BMofk6LAvJN0hSGCQ&s',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tTQrjhZaFg2eVYE6K0o7AqL0T1caTGuU0g&s',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://www.allrecipes.com/thmb/mvO1mRRH1zTz1SvbwBCTz78CRJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-_PzrCRZPnEo-1hB4BMofk6LAvJN0hSGCQ&s',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tTQrjhZaFg2eVYE6K0o7AqL0T1caTGuU0g&s',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://www.allrecipes.com/thmb/mvO1mRRH1zTz1SvbwBCTz78CRJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-_PzrCRZPnEo-1hB4BMofk6LAvJN0hSGCQ&s',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tTQrjhZaFg2eVYE6K0o7AqL0T1caTGuU0g&s',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://www.allrecipes.com/thmb/mvO1mRRH1zTz1SvbwBCTz78CRJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-_PzrCRZPnEo-1hB4BMofk6LAvJN0hSGCQ&s',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tTQrjhZaFg2eVYE6K0o7AqL0T1caTGuU0g&s',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://www.allrecipes.com/thmb/mvO1mRRH1zTz1SvbwBCTz78CRJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-_PzrCRZPnEo-1hB4BMofk6LAvJN0hSGCQ&s',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tTQrjhZaFg2eVYE6K0o7AqL0T1caTGuU0g&s',
    title: <InstagramIcon/>,
  },
  {
    img: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
    title: <InstagramIcon/>,
  },

 
];