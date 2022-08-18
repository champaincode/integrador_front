import Divider from "@mui/material/Divider";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import "./menuSeccion.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { setFoods } from "../../store/foods";
import { setDrinks  } from "../../store/drinks";
import { setFoodsId } from "../../store/foodsId"
import { setDrinkId } from "../../store/drinkId"
import Modaldrink from "../../Common/Modaldrink"
import Modalfood from "../../Common/Modalfood";
import ModalUnic from "../../Common/ModalUnic";
 
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
  const [openDos, setOpenDos] = useState(false);
  const [changecolor, setChangecolor] = useState("change");
  const handleCloseFood = () => setOpenDos(false);
  const handleClose = () => setOpen(false);
  const handleFavoriteReset = () => setChangecolor("change");
  const drinkDetail = useSelector((state)=>state.setDrinkId)
  const foodDetail = useSelector((state)=>state.setFoodsId)
  const foodsProduct = useSelector((state)=>state.setFoods)
  const drinksProduct = useSelector((state)=>state.setDrinks)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDrinks())
    dispatch(setFoods())
    }, [])

    const handleOpen = (id) => {
      dispatch(setDrinkId(id))
      setOpen(true);
    };
  
    const handleOpenFood = (id) => {
      dispatch(setFoodsId(id))
      setOpenDos(true);
    };

  const HandleFavorite = () => {
    changecolor === "change"
      ? setChangecolor("change2")
      : setChangecolor("change");

    changecolor === "change"
      ? setTimeout(() => {
          alert("añadiste a favoritos");
        }, 500)
      : setTimeout(() => {
          alert("quitaste de favoritos");
        }, 500);
  };


 return (
    <>
      <ModalUnic/>
      <Modaldrink drinkDetail={drinkDetail} open={open} handleClose={handleClose} HandleFavorite={HandleFavorite}  changecolor={ changecolor} />
      <Modalfood foodDetail={foodDetail} openDos={openDos} handleCloseFood={handleCloseFood} HandleFavorite={HandleFavorite}  changecolor={ changecolor} />

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
              {drinksProduct.map((drink, index) => (
                <Grid item xs={2} sm={4} md={2} key={index}>
                  <Button onClick={() => handleOpen(drink.id)}>
                    <Item
                      sx={{
                        width: "90px",
                        borderRadius: "100px",
                        height: "90px",
                        backgroundColor: "#795548",
                        "&:hover": { backgroundColor: "#FFCC96" },
                      }}
                    >
                      <img className="img_adptable" src={drink.image} />
                    </Item>
                  </Button>

                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    component="h2"
                    sx={{ fontFamily: "lobster", marginLeft: "15px" }}
                  >
                    {drink.tittle}
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
              {foodsProduct.map((food, index) => (
                <Grid item xs={2} sm={4} md={2} key={index}>
                  <Button onClick={() => handleOpenFood(food.id)}>
                    <Item
                      sx={{
                        width: "100px",
                        borderRadius: "100px",
                        height: "100px",
                        backgroundColor: "#795548",
                        padding: { xs: 2, md: 2 },
                        "&:hover": { backgroundColor: "#FFCC96" },
                      }}
                    >
                      <img className="img_adptable" src={food.image} />
                    </Item>
                  </Button>
                  <h2 style={{ marginLeft: "10px" }}> {food.tittle} </h2>
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
