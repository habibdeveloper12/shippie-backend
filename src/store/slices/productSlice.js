import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProductCount: (state, action) => {
      const { id, count, price } = action.payload;
      const existingProduct = state.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.count = count;
        existingProduct.total = count * price;
      } else {
        state.push({ id, count, price, total: count * price });
      }
    },
    updateProductCount: (state, action) => {
      const { id, count } = action.payload;
      const existingProduct = state.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.count = count;
        existingProduct.total = count * existingProduct.price;
      }
    },
  },
});
export const { setProductCount, updateProductCount } = productsSlice.actions;

export default productsSlice.reducer;
