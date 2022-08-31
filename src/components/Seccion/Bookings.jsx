import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';


const Bookings = () => {
  
 return(
  <Container  sx={{marginTop:"100px"}}>
  <Container>
  <Divider variant='middle' />
   <Typography sx={{padding:"20px",fontFamily:"Lobster",fontSize:"25px",color:"white", textAlign:"center"}}>Bookings</Typography>
  <Divider variant='middle'/>
  

  </Container>

  </Container> 
 )
}

export default Bookings


