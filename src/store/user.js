import { createAction, createReducer,createAsyncThunk} from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER")
export const setLogout= createAction("SET_LOGOUT")

export const setPersistencia = createAsyncThunk(
    "SET_PERSISTENCIA",
    () => {
     return localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : {};
    })
const userReducer = createReducer( {}
, {
    [setUser]:(state,action) => action.payload,
    [setLogout]:(state,action) => {return {}},
    [setPersistencia.fulfilled]:(state,action) => action.payload
})

export default userReducer
 