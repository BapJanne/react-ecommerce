import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "../models/cartItemType";

interface cartState {
  items: CartItemType[];
  totalQuantity: number;
  totalAmount: number;
  cartUpdateStatus: string;
}

const initialState: cartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  cartUpdateStatus: "normal",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeClassCart(state) {
      state.cartUpdateStatus = "normal";
    },
    addItemToCart(state, action: PayloadAction<CartItemType>) {
      const newItem: CartItemType = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + newItem.price;
      state.cartUpdateStatus = "add";
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          img: newItem.img,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.cartUpdateStatus = "remove";
      if (existingItem!.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem!.price;
      }
      if (state.items.length < 1) {
        state.totalAmount = 0;
      } else {
        state.totalAmount = state.totalAmount - existingItem!.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
