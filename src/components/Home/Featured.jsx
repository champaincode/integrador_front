import * as React from "react";

import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function Featured() {

  return (
    <Container
      maxWidth="xl"
      disableGutters="true"
      sx={{
        backgroundColor: "#795548",
        display: "flex",
        alignItems: "center",
        height:"60vh",
      }}
    >
      <Box   sx={{
          height:"60vh",
          width:"50vw"
      }}>
        <img
          src="https://images.unsplash.com/photo-1518831449057-63cc79a76488?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          height={"100%"}
          width={"100%"}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mx: "auto" }}>
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
  );
}





// https://images.unsplash.com/photo-1598908314833-809d7bb6c2c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=855&q=80