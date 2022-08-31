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
import { setDrinks } from "../../store/drinks";
import { setFoodsId } from "../../store/foodsId";
import { setDrinkId } from "../../store/drinkId";
import ModalUnique from "../../Common/ModalUnique";
import SeccionProduct from "../../Common/SeccionProduct";
import ProductsCircles from "../../Common/ProductsCircles";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [changecolor, setChangecolor] = useState("change");

  const handleFavoriteReset = () => setChangecolor("change");
  const drinkDetail = useSelector((state) => state.setDrinkId);
  const foodDetail = useSelector((state) => state.setFoodsId);
  
  const foodsProduct = useSelector((state) => state.setFoods);
  const drinksProduct = useSelector((state) => state.setDrinks);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  
  }


  useEffect(() => {
    dispatch(setDrinks());
    dispatch(setFoods());
  }, []);

const handleOpen = (id) => {
    dispatch(setFoodsId(id));
    setOpen(true);
    dispatch(setDrinkId(id));
    setOpen(true);
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
   
       <Container  sx={{ marginTop: "10px" }}>

        <SeccionProduct id={"/menu"} text={"Drinks"} />
        <ProductsCircles circle={drinksProduct} handleOpen={handleOpen} />
        <SeccionProduct text={"Foods"} />
        <ProductsCircles circle={foodsProduct} handleOpen={handleOpen} />
 
      <ModalUnique
        product={foodDetail ? foodDetail : drinkDetail}
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        HandleFavorite={HandleFavorite}
        changecolor={changecolor}
      />
        </Container>

  );
};
export default Menu;
