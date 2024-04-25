import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CtegorySlice from "./slices/CtegorySlice";
import SearchSlice from "./slices/SearchSlice";

// INITIATE STORE//
const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CtegorySlice,
    search: SearchSlice,
  },
});

export default Store;
