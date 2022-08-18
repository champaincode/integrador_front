import React,{ useReducer } from "react";
import { useNavigate } from "react-router";
import { Button } from "@mui/material"
import "./shop.css";
import { shoppinginitialState, shoppingReducer } from "../../Reducers/shoppingReducer";
import ProductItem from "./ProductItem";
import CardItem from "./CardItem";
import { TYPES } from "../../actions/shoppingAction";


export const Shop = (data) => {
const [state, dispatch] = useReducer(shoppingReducer,shoppinginitialState)
const {products,cart} = state
let {id,name,price} =data;
const addToCart = (id) => {
  dispatch({type:TYPES.ADD_TO_CART,payload:id})
}
const delFromCart = (id,all=false) => {
if(all){
  dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id})
}else {
  dispatch({type:TYPES.REMOVE_ONE_FROM_CART,payload:id})
}
}

const clearCart = () => {
  dispatch({type:TYPES.CLEAR_CART})
}

const navigate = useNavigate();

const handleCheckout = () => {

  navigate('/shop/checkout');
 
}
  return (
    <>
      <div className="cartscreen ">
        <div className="cartscreen__left">
         <h2>Carrito de compras</h2>
          <h3>Productos</h3>
          <article className="box grid-responsive">

            {products.map((product) => <ProductItem key={product.id} data={product} addToCart={addToCart}/>)}
          </article>
          <h3>Carrito</h3> <h4> TOTAL :{price}</h4>
          <article className="box">  
          <button onClick={clearCart}>limpiar carrito</button>
          {
             cart.map((item, index) => <CardItem key={index} data={item} addToCart={addToCart} delFromCart={delFromCart} />)
          }

          </article>
      

       </div>
       
      </div>
    </>
  );
};

export default Shop