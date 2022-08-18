import React, { useState, useEffect } from "react";
import "./menuAdmin.css";
import ProductsInfo from "../../menuInfo/ProductsInfo";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { IconButton, Container, Box, TextField, Avatar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useInput from "../../../../../Hooks/useInput";
import axios from "axios";
import { setAllProducts } from "../../../../../store/allproducts";
import { useDispatch, useSelector } from "react-redux";

const EditProduct = () => {
  const tittle = useInput("");
  const description = useInput("");
  const price = useInput("");
  const stock = useInput("");
  const image = useInput("");
  const [drink,setDrink] = useState(null)
  const [food,setFood] = useState(null)
  const [open, setOpen] = useState("closed");
  const [add, setAdd] = useState("visible_add_yes");
  const matches = useMediaQuery("(min-width:900px)");
  const dispatch = useDispatch()
  const allproducts = useSelector(state=> state.setAllProducts)

  
useEffect(() => {
  dispatch(setAllProducts())
}, [])


  const Input = styled("input")({
    display: "none",
  });

  const handleOpen = (id) => {
    open  === "closed" ?setOpen("open") : setOpen("closed",);

  };

  // const onChangeFood = (e) => {
  //  setFood(e.target.value, true)
  //  setDrink(null)
  // }

  // const onChangeDrink = (e) => {
  //   setDrink(e.target.value,true)
  //   setFood(null)
  
  // }


const handleAddProduct = (e) => {
    // axios
    //   .post("http://localhost:5000/api/admin/addproducts", {
    //     tittle: tittle.value,
    //     description: description.value,
    //     price: price.value,
    //     stock: stock.value,
    //     image: image.value,
    //     drink: drink.value,
    //     food: food.value
    //   })
    //   // .then((res) => setAddProduct(res.data));
    // setOpen("closed");
  };

  return (
    <>{allproducts.map((product,i)=> (
      <> 
<Container 
      key={i}
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "white",
          marginTop:"20px"
        }}
      >
        <Box>
          {product.tittle ? <h2>{product.tittle}</h2> : <h2>Product</h2>} 
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="text"  onClick={(i) => handleOpen()} startIcon={<EditIcon />}>
            Edit
          </Button>

          <Button
            variant="text"
            color="error"
            sx={{ heigth: "5px" }}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Stack>
      </Container>
      <Container
        maxWidth="md"
        id={open}
        className={matches ? "form-Edit-Pc" : "form-Edit-Phone"}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "white",
        }}
      >
        {" "}
        <Container maxWidth="sm" className={matches ? "block" : "none"}>
          <Box sx={{ display: "flex", marginTop: "20px" }}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 100, height: 100 }}
            />{" "}
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              marginRight: "10px",
            }}
            
          >   
          

          <TextField
          id="fullWidth"
          placeholder='"www.urlejemplo.com"'
          label="Img URL"
          variant="filled"
          // {...image}
        /> 
            <TextField
              id="fullWidth"
              label="Tittle"
              variant="filled"
              // {...tittle}
            />

            <TextField
              id="filled-multiline-flexible"
              label="Description"
              multiline
              maxRows={5}
              variant="filled"
              // {...description}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: 200 }}>
            <TextField
              id="filled-multiline-static"
              label="Price"
              variant="filled"
              placeholder="$"
              defaultValue="$"
              // {...price}
            />
            <TextField
              id="fullWidth"
              label="Stock"
              variant="filled"
              // {...stock}
            />
            
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                ¿what's this product?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value={drink}
                  control={<Radio />}
                  label="Drink"
                  // onChange={onChangeDrink}
                />
                <FormControlLabel
                  value={food}
                  control={<Radio />}
                  label="Food"
                  // onChange={onChangeFood}
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Container>
        <Button
          variant="text"
          className={add}
          onClick={handleAddProduct}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          Update
        </Button>
      </Container>  
      </>
    ))}
      
    </>
  );
};

export default EditProduct;
