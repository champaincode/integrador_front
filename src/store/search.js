import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const setSearch = createAsyncThunk("SET_SEARCH",(tittle) => {
return axios.post(`http://localhost:5000/api/producto/search/${tittle}`)
    .then((res) => res.data)
    
})
export const setSearchReducer = createReducer([],{
 
    [setSearch.fulfilled]:(state,action) => action.payload
    
})