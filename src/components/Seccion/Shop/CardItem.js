import React ,{ useReducer }from 'react'
import { TYPES } from "../../actions/shoppingAction";
import { shoppinginitialState, shoppingReducer } from "../../Reducers/shoppingReducer";

const CardItem = ({data,addToCart,delFromCart }) => {
    let {id,name,price,quantity} = data

// const [state, dispatch] = useReducer(shoppingReducer,shoppinginitialState)
// const {products,cart} = state

// const addToCart = (id) => {
//   dispatch({type:TYPES.ADD_TO_CART,payload:id})
// }
   return (
    <div style={{borderBottom:"thin solid gray"}}>
        <h4>{name}</h4><button onClick={() => addToCart(id)}>Agregar uno</button>        <button onClick={() => delFromCart(id)}>Eliminar uno</button>
        <h5>${price*quantity} x{quantity}</h5>

        <button onClick={() => delFromCart(id,true)}>Eliminar todos</button>
    </div>
  )
}

export default CardItem