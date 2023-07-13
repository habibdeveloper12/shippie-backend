import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import counterReducer from "./slices/counterSlice";
import cartReducer from "./slices/cartSlice";
const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    counter: counterReducer,
    cart: cartReducer,
  },
});

export default store;
