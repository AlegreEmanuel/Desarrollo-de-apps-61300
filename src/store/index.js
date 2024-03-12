import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counters/counterSlice'
import shopReducer from '../features/shop/shopSlice'
import cartReducer from '../features/shop/cartSlice'
import authReducer from '../features/auth/authSlice'
import { shopApi } from "../services/ShopService";
import { setupListeners } from "@reduxjs/toolkit/query/react"; 
import { authApi } from "../services/AuthService";


const rootReducer = {
  counterReducer,
  shopReducer,
  cartReducer,
  authReducer,
  [shopApi.reducerPath]: shopApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
};

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware);

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

setupListeners(store.dispatch);

export default store;