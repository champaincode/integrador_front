import React from "react";
import { useNavigate } from "react-router";
import { Button } from "@mui/material"
import "./shop.css";

// import { useSelector } from "react-redux";





export const Shop = () => {
//  const products = useSelector(state => state.cart)
//  console.log('Productos', products)
 //producto seleccionado y cantidad
//  const totalPrice = products.reduce(
//   (previousValue, currentValue) => previousValue + (currentValue.product.price * currentValue.quantity),0
// );

const navigate = useNavigate();

const handleCheckout = () => {

  navigate('/shop/checkout');
 
}
  return (
    <>
      <div className="cartscreen ">
        <div className="cartscreen__left">
         <h2>Shopping Cart</h2>
            {/*{products.map((product,i)=>{
            // <CartItem key={i} Actualproduct={product}/>
            return  <Box key={i}>{product}</Box>
            
          } )} */}
       </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal items</p>
            <p>$ 20</p>
          </div>
          <div>
            <Button onClick={handleCheckout} type="submit" variant="contained" size="medium">
            Proceed To Checkout
          </Button> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop