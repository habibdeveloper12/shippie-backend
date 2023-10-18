import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import counterReducer from "./slices/counterSlice";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice";
const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    counter: counterReducer,
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
