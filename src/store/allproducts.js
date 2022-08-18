import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const setAllProducts = createAsyncThunk("SET_AllPRODUCTS",() => {
return axios.get("http://localhost:5000/api/producto").then((res) => res.data)
})
export const setAllProductsReducer = createReducer([],{
    [setAllProducts.fulfilled]:(state,action) => action.payload
})