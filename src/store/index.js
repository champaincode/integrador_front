import { configureStore} from '@reduxjs/toolkit'
import logger from "redux-logger"
import userReducer from './user'
import {setFoodsReducer} from './foods'
import {setDrinksReducer} from './drinks'
import {setSearchReducer} from './search'
import {setAllProductsReducer} from './allproducts'
import {setFoodsIdReducer} from './foodsId'
import {setDrinkIdReducer} from './drinkId'
import cartReducer from './cart'
import getFromCartReducer from './getCart'

const store =configureStore({
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user:userReducer,
    setFoods:setFoodsReducer,
    setDrinks:setDrinksReducer,
    setSearch:setSearchReducer,
    setAllProducts:setAllProductsReducer,
    setFoodsId:setFoodsIdReducer,
    setDrinkId:setDrinkIdReducer,
    cart:cartReducer,
    getCart: getFromCartReducer
   },
})
export default  store