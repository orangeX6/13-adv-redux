import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Fetches cart data on initial load
    replaceCart(state, action) {
      return {
        ...state,
        items: action.payload.items,
        totalQuantity: action.payload.totalQuantity,
        totalAmount: action.payload.totalAmount,
      };
    },
    addItemToCart(state, action) {
      // console.log(action);
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.unshift({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      }
      state.totalAmount += newItem.price;
      state.totalQuantity++;
      state.changed = true;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }
      state.totalAmount -= existingItem.price;
      state.totalQuantity--;
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
