import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    position: [],
    itemName: [],
    isVeg: [],
    price: [],
    id: [],
    flag: [0],
    restuarantInfo: [],
  },
  reducers: {
    addItemName: (state, action) => {
      state.itemName.push(action.payload);
      console.log(state.itemName);
    },
  },
});

export const { incFlag } = cartSlice.actions;

export default cartSlice.reducer;
