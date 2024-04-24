import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
// INITIATE STORE//
const Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default Store;
