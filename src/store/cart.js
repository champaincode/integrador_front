import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk(
  "ADD_CART",
  async (item) => {
    return axios
      .post(`http://localhost:5000/api/cart` , item)
      .then((res) => {
      return res.data;
      });
  }
);

export const deleteFromCart = createAsyncThunk(
  "DELETE_FROM_CART",
  async (id) => {
    return axios
      .delete(`http://localhost:5000/api/cart/${id}`)
      .then((res) => {
        return res.data;
      });
  }
);
export const getFromCart = createAsyncThunk("GET_FROM_CART", async (userId) => {
  console.log("EL USER ID PUTAMADRE", userId)
  const data = await axios.get(`http://localhost:5000/api/cart/${userId}`)
    return data.data
  ;
});
const cartReducer = createReducer(
 [],
  {
    [addToCart.fulfilled]: (state, action) => {
     const newState = [action.payload];
     localStorage.setItem("Cart", JSON.stringify(newState));
        return newState;
    },
    [getFromCart.fulfilled]: (state, action) => action.payload,

    [deleteFromCart.fulfilled]: (state, action) => {
      const newState = state.filter(
        (element) => element.product.id !== action.payload.id
      );
      localStorage.setItem("Cart", JSON.stringify(newState));
      return newState;
    },
    
  }
);

export default cartReducer;



// const cartReducer = createReducer(
//   localStorage.getItem("Cart") || [],
//   {
//     [addToCart.fulfilled]: (state, action) => {
//       const newState = [...state, action.payload];
//       localStorage.setItem("Cart", newState);
//       return newState;
//     },
//     [deleteFromCart.fulfilled]: (state, action) => {
//       const newState = state.filter(
//         (element) => element.product.id !== action.payload.id
//       );
//       localStorage.setItem("Cart", JSON.stringify(newState));
//       return newState;
//     },
//   }
// );