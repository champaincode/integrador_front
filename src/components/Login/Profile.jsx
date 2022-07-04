import React from 'react'
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector(state=> state.user)
  return (
    <Container
    maxWidth="xs"
    disableGutters="true"
    sx={{
      backgroundColor: "#795548",
      display: "flex",
      alignItems: "center",
      height:"70vh",
      marginTop:"180px"
    }}
  >


    <Box sx={{ display: "flex", justifyContent: "center", flexDirection:"column",mx:"auto" }}>
      
    
        <Typography
          variant="p"
          className="tittle"
          sx={{
            mr: 2,

            fontFamily: "Roboto",
            fontSize: 25,
            fontWeight: "bold",
            color: "white",
            textDecoration: "none",
          }}
        >
         Nombre:{user.firstname} 
        </Typography>
        <Typography
          variant="p"
          className="tittle"
          sx={{
            mr: 2,

            fontFamily: "Roboto",
            fontSize: 25,
            fontWeight: "bold",
            color: "white",
            textDecoration: "none",
          }}
        >
         Apellido:{user.lastname}
        </Typography>
        <Typography
          variant="p"
          className="tittle"
          sx={{
            mr: 2,
            fontFamily: "Roboto",
            fontSize: 25,
            fontWeight: "bold",
            color: "white",
            textDecoration: "none",
          }}
        >
         Email:{user.email}
        </Typography>
    
    </Box>
   
  </Container>
  )
}

export default Profile