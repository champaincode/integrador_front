import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import axios from "axios"

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);






export default function BasicCard() {
  const [allUsers, setAllUsers] = useState([])
  const setAllusers = () => { 
    axios.get('http://localhost:5000/api/admin/alluser',)
   .then((res) => {
     console.log(res.data)
     setAllUsers(res.data)
   })
   }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <button onClick={setAllusers}>TODO LOS USUARIOS</button>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          
          {allUsers.map((users, i)=>{
           return (<p key={i}>{users.firstname}</p>)
          })}
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}