import { useEffect, useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setSearch } from "../store/search";
import ModalUnique from "../Common/ModalUnique";
import SeccionProduct from "../Common/SeccionProduct";
import ProductsCircles from "../Common/ProductsCircles";
import { setFoodsId } from "../store/foodsId";
import { setDrinkId } from "../store/drinkId";

const ProductSearch = ({ HandleFavorite, changecolor }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const matchProduct = useSelector((state) => state.setSearch);
  const drinkDetail = useSelector((state) => state.setDrinkId);
  const foodDetail = useSelector((state) => state.setFoodsId);
  const { tittle } = useParams();
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(setSearch(tittle));
  }, [tittle]);

  const handleOpen = (id) => {
    dispatch(setFoodsId(id));
    setOpen(true);
    dispatch(setDrinkId(id));
    setOpen(true);
  };
  return (
    <><ModalUnique
        product={foodDetail ? foodDetail : drinkDetail}
        open={open}
        handleClose={handleClose}
        HandleFavorite={HandleFavorite}
        changecolor={changecolor}
      /> <Container sx={{ marginTop: "100px" }}>
        <SeccionProduct text={"Search"} />
        <Box sx={{ marginTop: "10px" }}>
          <Container maxWidth="lg">
            <Grid
              container
              spacing={{ xs: 8, md: 5 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            ></Grid>
          </Container>
        </Box>
        <ProductsCircles circle={matchProduct} handleOpen={handleOpen} />
      </Container>
    </>
  );
};
export default ProductSearch;
