import React, { useState } from "react";
import Modal from "react-modal";
import EditProduct from "./EditProduct";
import ProductsInfo from "../../menuInfo/ProductsInfo";
import {
  Button,
  Container,
  Box,
  Typography,

  IconButton,
  FormControlLabel,
} from "@mui/material";
import {
  Avatar,
  Input,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { BrandingWatermark, PhotoCamera } from "@mui/icons-material";
import "./menuAdmin.css";
import useInput from "../../../../../Hooks/useInput";
import axios from "axios";
import "./styles.css";



const AddProd = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [drink, setDrink] = useState(false);
  const [food, setFood] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [prodAdmin, setProdAdmin] = useState({
    tittle: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });
  
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const onChange = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "tittle":
        setProdAdmin({ ...prodAdmin, tittle: e.target.value });
        break;
      case "description":
        setProdAdmin({ ...prodAdmin, description: e.target.value });
        break;
      case "price":
        setProdAdmin({ ...prodAdmin, price: e.target.value });
        break;
      case "stock":
        setProdAdmin({ ...prodAdmin, stock: e.target.value });
        break;
      case "image":
        setProdAdmin({ ...prodAdmin, image: e.target.value });
        break;
    }
  };
  const onChangeFood = (e) => {
    setFood(!food);
  };

  const onChangeDrink = (e) => {
    setDrink(!drink);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/admin/createproducts", {
    prodAdmin
    }).then((res) => res.data)
  };

  return (
    <>
       <div className="modal">
    

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
        
      > <div style={{display:"flex",justifyContent:"end"}}><button onClick={toggleModal}>X</button></div>   

        <form  onSubmit={handleAddProduct}>
          <div className="form-inputs">
          <input placeholder="Img URL" className="inputx input-margen" name="image" type="text" onChange={onChange}/>
          <input placeholder="tittle" className="inputx input-margen" name="tittle" type="text" required onChange={onChange}/>
          <input placeholder="price"  className="inputx input-margen" name="price" type="text"required/>
          <textarea placeholder="description" className="input input-margen" name="description" type="text"rows={10} cols={10} onChange={onChange} />
          <input placeholder="stock" className="inputx input-margen" name="stock" type="number" onChange={onChange}/>
          <div> <p className="radio-form-text">whats is product?</p></div> 
        <div className="radio-form">
          <div>
        <input type="radio" name="size" value="S" id="s"/>
        <label for="s">Drink</label>
          </div>
       
          <div>
        <input type="radio" name="size" value="S" id="s"/>
        <label for="s">Food</label>
          </div>
          </div>
          </div>     
        

          <div style={{display:"flex",justifyContent:"center"}}>  <button type="submit">ADD</button></div>   
         </form>
      
    
    
      </Modal>
    </div>

      <Container sx={{ flex: 4, marginTop: "100px" }}>
        <ProductsInfo />
        <Container
          sx={{ display: "flex", justifyContent: "end", marginBottom: "10px" }}
        >
          <Button variant="contained" onClick={toggleModal} >
            Add Product
          </Button>
        </Container>

        <div className="menu_content">
          <EditProduct />
        </div>
      </Container>
    </>
  );
};

export default AddProd;
