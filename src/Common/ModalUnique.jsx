import {useState}from "react";
import "./indexCommon.css"
import { Modal, Box, Typography, Grid, Button, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { experimentalStyled as styled } from "@mui/material/styles";
import { useSelector , useDispatch} from "react-redux";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { addToCart } from "../store/cart";

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
const ModalUnique = ({
  product,
  open,
  setOpen,

  handleClose,
  HandleFavorite,
  changecolor,
}) => {

  const user = useSelector((state) => state.user);
  const [count, setCount] = useState(1);
  const [stateButton, SetStateButton] = useState(false)
  const dispatch = useDispatch()

  const IncNum = () => {
   const newCount = count + 1
  
    if(newCount === product.stock) {
      SetStateButton(true)

   }
   setCount(count + 1);
 };

 const   handleClosedos = () => {
  setOpen(false)
  setCount(1);
  SetStateButton(false)
 }
 
  const DecNum = () => {
    const newCount = count +1
    if (count > 0) {setCount(count - 1)}
    if(count > 1 || newCount === product.stock){
      SetStateButton(false)}
    else {
      setCount(1);
    
    }
  };
  
 
  const handleBuy = (product) => {
    const item = {
      userId: user.id,
      price: product.price,
      quantity: count,
      productoId: product.id,
      tittle: product.tittle,
      image: product.image,
    }

    dispatch(addToCart(item))
      console.log( "COMPRASTE GUACHIN")
      setCount(1);
      SetStateButton(false)
  };

  return (
    <>
      {product && (
        <Modal
          open={open}
          onClose={handleClosedos}
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
              Coffeels
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
                    {product.tittle}
                  </Typography>

                  <Typography
                    id="modal-modal-title"
                    variant="p"
                    component="p"
                    sx={{ fontFamily: "Roboto", marginTop: "20px" }}
                  >
                    {" "}
                    {product.description}
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    variant="p"
                    component="p"
                    sx={{ fontFamily: "Roboto", marginTop: "20px" }}
                  >
                    Stock:{product.stock}
                  </Typography>
                  
                  <Typography
                    id="modal-modal-title"
                    variant="p"
                    component="p"
                    sx={{ fontFamily: "Roboto", marginTop: "20px" }}
                  >
                    {" "}
                    Price:${product.price}
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    variant="p"
                    component="p"
                    sx={{ fontFamily: "Roboto", marginTop: "20px" }}
                  >
                    Quantity: <Button
                     
                   onClick={DecNum}
                   variant="contained"
                   color="success"
                   sx={{ height:"20px",minWidth:"13px",padding:"7px 0px",marginRight:"5px" }}
                 >
               <RemoveIcon />
                 </Button>   
                 
                 {count}
              
                 <Button
                   onClick={IncNum}
                    disabled={stateButton}
                      variant="contained"
                      color="success"
                    className="buttonAdd"
                 sx={{ height:"20px",padding:"7px 0px", minWidth:"13px",marginLeft:"5px"}}
                   
                    >
                    
                    <AddIcon />
                    </Button> 
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    {" "}
                    <Button
                      setCount={setCount}
                      onClick={() => handleBuy(product)}
                      variant="contained"
                      color="success"
                      sx={{ fontFamily: "Roboto", marginTop: "50px" }}
                    >
                      Buy
                    </Button>
                    <Box>
                      <IconButton
                        onClick={HandleFavorite}
                        variant="contained"
                        sx={{ fontFamily: "Roboto", marginTop: "50px" }}
                      >
                        {user.id && <FavoriteIcon className={changecolor} />}
                      </IconButton>
                    </Box>
                  </Box>
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
                  <img className="img_adptable" src={product.image} />
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
  );
};

export default ModalUnique;
