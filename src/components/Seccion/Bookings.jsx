import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';


const Bookings = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
 return(
  <Container  sx={{marginTop:"100px"}}>
  <Container>
  <Divider variant='middle' />
   <Typography sx={{padding:"20px",fontFamily:"Lobster",fontSize:"25px",color:"white", textAlign:"center"}}>Bookings</Typography>
  <Divider variant='middle'/>
  
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker value={selectedDate} onChange={handleDateChange} />
      <TimePicker value={selectedDate} onChange={handleDateChange} />
      <DateTimePicker value={selectedDate} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
  </Container>

  </Container> 
 )
}

export default Bookings


