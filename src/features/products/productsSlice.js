import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../data/products.js';

const productsSlice = createSlice({
  name: 'products',
  initialState: products,
  reducers: {},
});

export default productsSlice.reducer;
