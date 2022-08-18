import { TYPES } from "../actions/shoppingAction";
import { useSelector } from "react-redux";

import {setAllProducts} from "../../store/allproducts"


export const shoppinginitialState = {
  //traer los productos de axios despues
   
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
    { id: 6, name: "Producto 6", price: 600 },
  ],
  cart: [],
};
// [axios.get("http://localhost:5000/api/producto").then((res) => console.log(res.data))],
export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
        let ItemToDelete = state.cart.find(
            (item) => item.id === action.payload
          );
          return ItemToDelete.quantity > 1
          ? {
              ...state,
              cart: state.cart.map((item) =>
                item.id === action.payload
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            }
          : {
              ...state,
              cart: state.cart.filter(item => item.id !== action.payload)
            };

    }
    case TYPES.REMOVE_ALL_FROM_CART: {
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
          };
    } case TYPES.TOTAL_AMOUNT:{

    }


    case TYPES.CLEAR_CART: 
        return shoppinginitialState;
    
    default:
      return state;
  }
}
