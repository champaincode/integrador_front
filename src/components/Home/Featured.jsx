import * as React from "react";
import "./featured.css"
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Link, useNavigate} from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Featured() {
  const matches = useMediaQuery('(min-width:830px)');
  const other = useMediaQuery('(min-width:830px)');
  const text = useMediaQuery('(min-width:830px)');
  const navigate = useNavigate()
  const handleNavigateFeatured = (e) => {
    e.preventDefault()
    navigate("/featured")
  }
  return (
    <Container maxWidth="xl"
    onClick={handleNavigateFeatured}
    disableGutters="true" className={matches ? "featured_pc":"featured_phone"} sx={{
      display: "flex",
      alignItems: "center",
      
     }}>
   
      <Box    onClick={handleNavigateFeatured} className={other?"imagen_featured_pc":"imagen_featured_phone"}  sx={{
          height:"70vh",
          width:"50vw",
          display:"flex",
          cursor:"pointer"
         }}>
        <img 
          src="https://images.unsplash.com/photo-1518831449057-63cc79a76488?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          height={"100%"}
          width={"100%"}
        />
      </Box>
    <Container
    onClick={handleNavigateFeatured}
      maxWidth="xl"
      disableGutters="true"
      className={text?"text_pc_featured":"text_phone_featured"} 
      sx={{
        backgroundColor: "#795548",
        display: "flex",
        alignItems: "center",
        height:"70vh",
        width: "50vw",
        cursor:"pointer"
      }}
    >

      <Box        sx={{ display: "flex", justifyContent: "center", mx: "auto"  }}>
        <Link to="/featured" style={{ textDecoration: "none" }}>
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
            Try our featured products 
          </Typography>
        </Link>
      </Box>
     
    </Container>
    </Container>
  );
}





// https://images.unsplash.com/photo-1598908314833-809d7bb6c2c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=855&q=80