import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


export const setFoodsId = createAsyncThunk("SET_FOODS_ID",async (id) => {
   const food = await axios.get(`http://localhost:5000/api/producto/foods/${id}`)
        return food.data
    })
    export const setFoodsIdReducer = createReducer([],{
        [setFoodsId.fulfilled]:(state,action) => action.payload
    })