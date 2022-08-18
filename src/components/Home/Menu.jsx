import * as React from "react";
import "./menu.css"
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Coffeels from "../../Assets/coffeels.jpg";
import useMediaQuery from '@mui/material/useMediaQuery';

const Otherseccion = () => {
  const matches = useMediaQuery('(min-width:830px)');
  const other = useMediaQuery('(min-width:830px)');
  const text = useMediaQuery('(min-width:830px)');
  const navigate = useNavigate()

  const handleNavigateMenu = (e) => {
    e.preventDefault()
    navigate("/menu")
  }

  return (
    <Container  maxWidth="xl"
    className={matches ? "menu_pc":"menu_phone"}
    disableGutters="true" 
    sx={{
     
      display: "flex",
      alignItems: "center",
      height: "100vh",
    
    }}
    >
      
    <Container
      maxWidth="xl" className={text?"text_pc":"text_phone"} 
      onClick={handleNavigateMenu}
      disableGutters="true"
      sx={{
        backgroundColor: "#795548",
        display: "flex",
        alignItems: "center",
        height: "70vh",
        width:"50vw",
        cursor:"pointer"
      }}
    >
      <Box  sx={{ display: "flex", justifyContent: "center", mx: "auto", }}>
        <Link to="/menu" style={{ textDecoration: "none" }}>
          {" "}
          <Typography
            variant="p"
            className="tittle"
            sx={{
              mr: 2,
              fontFamily: "Lobster",
              fontSize: 40,
              fontWeight: 200,
              color: "white",
              textDecoration: "none",
            }}
          >
            Menu
          </Typography>
        </Link>
      </Box>
     
    </Container>
    
    <Box    onClick={handleNavigateMenu}   className={other?"imagen_pc":"imagen_phone"} 
        sx={{
          height: "70vh",
          width: "50vw",
          cursor:"pointer"
        }}
      >
        <img src={Coffeels} height={"100%"} width={"100%"} alt="" />
      </Box>
    </Container>
  );
};

export default Otherseccion;

