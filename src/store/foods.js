import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const setFoods = createAsyncThunk("SET_FOODS",() => {
return axios.get("http://localhost:5000/api/producto/foods").then((res) => res.data)
})
export const setFoodsReducer = createReducer([],{
    [setFoods.fulfilled]:(state,action) => action.payload
})