import React, { useReducer, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import "./shop.css";
import {
  shoppinginitialState,
  shoppingReducer,
} from "../../Reducers/shoppingReducer";
import ProductItem from "./ProductItem";
import CardItem from "./CardItem";
import { TYPES } from "../../actions/shoppingAction";
import { useDispatch, useSelector } from "react-redux";
import { getFromCart } from "../../../store/cart";
import { addToCart } from "../../../store/cart";

export const Shop = (data) => {
  const user = useSelector((state) => state.user);
  const carro = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(carro);
  // const [state, dispatch] = useReducer(shoppingReducer,shoppinginitialState)
  // const {products,cart} = state

  // const addToCartShoping = () => {
  //   dispatch(addToCart())
  // }
  // const delFromCart = (id,all=false) => {
  // if(all){
  //   dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id})
  // }else {
  //   dispatch({type:TYPES.REMOVE_ONE_FROM_CART,payload:id})
  // }
  // }

  // const clearCart = () => {
  //   dispatch({type:TYPES.CLEAR_CART})
  // }

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/shop/checkout");
  };

  useEffect(() => {
    user.id && dispatch(getFromCart(user.id));
  }, [user]);

  return (
    <>
      <div className="cartscreen ">
        <div className="cartscreen__left">
          <h2>Carrito de compras</h2>
          <article className="box grid-responsive">
            {/* {products.map((product) => <ProductItem key={product.id} data={product} addToCart={addToCart}/>)} */}
          </article>
          <h3>Carrito</h3> <h4> TOTAL </h4>
          <article className="box">
            {/* <CardItem key={index} data={item} addToCart={addToCart}/> */}
            <button>limpiar carrito</button>

            {carro.map((item, index) => (
               
              <div key={index}> 
                    <h1> {item.title}</h1>
                    <h5>{item.price*item.quantity} x {item.quantity}</h5>
             
              </div>
            ))}
          </article>
        </div>
      </div>
    </>
  );
};

export default Shop;
