import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CtegorySlice from "./slices/CtegorySlice";
// INITIATE STORE//
const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CtegorySlice,
  },
});

export default Store;
