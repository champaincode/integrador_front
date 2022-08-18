import { configureStore} from '@reduxjs/toolkit'
import logger from "redux-logger"
import userReducer from './user'
import {setFoodsReducer} from './foods'
import {setDrinksReducer} from './drinks'
import {setSearchReducer} from './search'
import {setAllProductsReducer} from './allproducts'
import {setFoodsIdReducer} from './foodsId'
import {setDrinkIdReducer} from './drinkId'

const store =configureStore({
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user:userReducer,
    setFoods:setFoodsReducer,
    setDrinks:setDrinksReducer,
    setSearch:setSearchReducer,
    setAllProducts:setAllProductsReducer,
    setFoodsId:setFoodsIdReducer,
    setDrinkId:setDrinkIdReducer
   },
})
export default  store