import Divider from "@mui/material/Divider";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import "./menuSeccion.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import { display } from "@mui/system";

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

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
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
            {Array.from(Array(1)).map((_, index) => (
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                key={index}
                sx={{ display: "flex", justifyContent: "end" }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", flex: 4 }}>
                  <Typography
                    id="modal-modal-title"
                    variant="h4"
                    component="h2"
                    sx={{ fontFamily: "lobster", marginTop: "20px" }}
                  >
                    Latte con crema
                  </Typography>

                  <Typography
                    id="modal-modal-title"
                    variant="p"
                    component="p"
                    sx={{ fontFamily: "Roboto", marginTop: "20px" }}
                  >
                    {" "}
                    Café espresso con leche vaporizada.
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    variant="p"
                    component="p"
                    sx={{ fontFamily: "Roboto", marginTop: "20px" }}
                  >
                    {" "}
                    Stock: 5
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    variant="p"
                    component="p"
                    sx={{ fontFamily: "Roboto", marginTop: "20px" }}
                  >
                    {" "}
                    Price: 20$
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
                  <img
                    className="img_adptable"
                    src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FSkinny%20Vainilla%20Latte%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
                  />
                </Item>
              </Grid>
            ))}
          </Grid>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal>

      <Container sx={{ marginTop: "100px" }}>
        <Container>
          <Divider variant="middle" />
          <Typography
            sx={{
              padding: "20px",
              fontFamily: "Lobster",
              fontSize: "25px",
              color: "white",
              textAlign: "center",
            }}
          >
            Drinks
          </Typography>
          <Divider variant="middle" />
        </Container>
        <Box sx={{ marginTop: "10px" }}>
          <Container maxWidth="lg">
            <Grid
              container
              spacing={{ xs: 8, md: 5 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Array.from(Array(8)).map((_, index) => (
                <Grid item xs={2} sm={4} md={2} key={index}>
                  <Button onClick={handleOpen}>
                    <Item
                      sx={{
                        width: "90px",
                        borderRadius: "100px",
                        height: "90px",
                        backgroundColor: "#795548",
                      
                        "&:hover": { border: "8px solid #FFCC96" },
                      }}
                    >
                      <img
                        className="img_adptable"
                        src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FSkinny%20Vainilla%20Latte%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
                      />
                    </Item>
                  </Button>

                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    component="h2"
                    sx={{ fontFamily: "lobster", marginLeft: "15px" }}
                  >
                    Café con leche
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Container>
          <Divider variant="middle" />
          <Typography
            sx={{
              padding: "20px",
              fontFamily: "Lobster",
              fontSize: "25px",
              color: "white",
              textAlign: "center",
            }}
          >
            Foods
          </Typography>
          <Divider variant="middle" />
        </Container>

        <Box sx={{ marginTop: "10px" }}>
          <Container maxWidth="lg">
            <Grid
              container
              spacing={{ xs: 8, md: 5 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Array.from(Array(8)).map((_, index) => (
                <Grid item xs={2} sm={4} md={2} key={index}>
                  <Button onClick={handleOpen}>
                  <Item
                    sx={{
                      width: "100px",
                      borderRadius: "100px",
                      height: "100px",
                      backgroundColor: "#795548",
                      padding: { xs: 2, md: 2 },
                      "&:hover": { border: "8px solid #FFCC96" },
                    }}
                  >
                    <img
                      className="img_adptable"
                      src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMezzaluna-425-x-425_0.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
                    />
                  </Item>
                  </Button>
                  <h2 style={{ marginLeft: "10px" }}> Media luna </h2>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default Menu;
