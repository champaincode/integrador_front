import React from 'react'
import {Modal, Box, Typography, Grid, Button, Paper } from "@mui/material"
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 550,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const Modalfood = ({foodDetail,openDos,handleCloseFood,HandleFavorite, changecolor}) => {
  return ( <>
      {foodDetail !== undefined && (
        <Modal
          open={openDos}
          onClose={handleCloseFood}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h2"
              component="h2"
              sx={{ fontFamily: "lobster", marginTop: "50px" }}
            >
              Cofeels
            </Typography>
            <Grid
              container
              spacing={{ xs: 8, md: 12 }}
              columns={{ xs: 4, sm: 8, md: 1 }}
            >
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                sx={{ display: "flex", justifyContent: "end" }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", flex: 4 }}>
                  <Typography
                    id="modal-modal-title"
                    variant="h4"
                    component="h2"
                    sx={{ fontFamily: "lobster", marginTop: "20px" }}
                  >
                    {foodDetail.tittle}
                  </Typography>

                  <Typography
                    id="modal-modal-title"
                    variant="p"
                    component="p"
                    sx={{ fontFamily: "Roboto", marginTop: "20px" }}
                  >
                    {" "}
                    {foodDetail.description}
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    variant="p"
                    component="p"
                    sx={{ fontFamily: "Roboto", marginTop: "20px" }}
                  >
                    {" "}
                    Stock:{foodDetail.stock}
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    variant="p"
                    component="p"
                    sx={{ fontFamily: "Roboto", marginTop: "20px" }}
                  >
                    {" "}
                    Price:${foodDetail.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ fontFamily: "Roboto", marginTop: "50px" }}
                  >
                    Buy
                  </Button>
                </Box>

                <Item
                  sx={{
                    width: "100px",
                    borderRadius: "100px",
                    height: "100px",
                    backgroundColor: "#795548",
                    padding: { xs: 2, md: 2 },
                  }}
                >
                  <img className="img_adptable" src={foodDetail.image} />
                </Item>
              </Grid>
            </Grid>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Modal>
      )}
      </>
  )
}

export default Modalfood