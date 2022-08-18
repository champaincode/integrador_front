import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


export const setDrinkId = createAsyncThunk("SET_DRINK_ID",async (id) => {
   const drink = await axios.get(`http://localhost:5000/api/producto/drinks/${id}`)
        return drink.data
    })
    export const setDrinkIdReducer = createReducer([],{
        [setDrinkId.fulfilled]:(state,action) => action.payload
    })