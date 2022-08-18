import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const setDrinks = createAsyncThunk("SET_DRINKS",() => {
return axios.get("http://localhost:5000/api/producto/drinks").then((res) => res.data)
})
export const setDrinksReducer = createReducer([],{
    [setDrinks.fulfilled]:(state,action) => action.payload
})