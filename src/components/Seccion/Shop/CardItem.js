import React ,{ useReducer }from 'react'
import { TYPES } from "../../actions/shoppingAction";
import { shoppinginitialState, shoppingReducer } from "../../Reducers/shoppingReducer";

const CardItem = ({item,addToCart,delFromCart }) => {
    let {id,title,price,quantity} = item

// const [state, dispatch] = useReducer(shoppingReducer,shoppinginitialState)
// const {products,cart} = state

// const addToCart = (id) => {
//   dispatch({type:TYPES.ADD_TO_CART,payload:id})
// }
   return (
    <div style={{borderBottom:"thin solid gray"}}>
        {/* 
        <button onClick={() => addToCart(id)}>Agregar uno</button>        <button onClick={() => delFromCart(id)}>Eliminar uno</button> */}
        <h5>${price*quantity} xsda {quantity}</h5>
        <p>x</p>
        <h1>{title}</h1>
        {/* <button onClick={() => delFromCart(id,true)}>Eliminar todos</button> */}
    </div>
  )
}

export default CardItem