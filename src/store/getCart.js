import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFromCart = createAsyncThunk("GET_FROM_CART", async (userId) => {
  const data = await axios.get(`http://localhost:5000/api/cart/${userId}`)
    console.log(data, "ACA ESTA LA DAAAAAAAAAAAATAAAAA") 
  ;
});
const getFromCartReducer = createReducer([], {
  [getFromCart.fulfilled]: (state, action) => action?.payload,
});



export default getFromCartReducer;
