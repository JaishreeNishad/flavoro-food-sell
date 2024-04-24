import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  }, //initial state of cart//
  //reducser(trigger): multiple function store//
  reducers: {
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addCart, removeFromCart } = CartSlice;
export default CartSlice.actions;
