import * as React from "react";

import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Coffeels from "../../Assets/coffeels.jpg";

const Otherseccion = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters="true"
      sx={{
        backgroundColor: "#795548",
        display: "flex",
        alignItems: "center",
        height: "60vh",
        mt: "40px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mx: "auto" }}>
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
      <Box
        sx={{
          height: "60vh",
          width: "47vw",
        }}
      >
        <img src={Coffeels} height={"100%"} width={"100%"} alt="" />
      </Box>
    </Container>
  );
};

export default Otherseccion;

