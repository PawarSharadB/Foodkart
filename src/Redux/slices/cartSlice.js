import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({...newItem, quantity: 1});
      }
    },
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== itemIdToRemove);
    },
    decreaseItemQuantity: (state, action) => {
      const itemIdToDecrease = action.payload;
      const existingItem = state.items.find(
        item => item.id === itemIdToDecrease,
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(item => item.id !== itemIdToDecrease);
      }
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
