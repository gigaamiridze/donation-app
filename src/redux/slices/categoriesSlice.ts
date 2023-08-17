import { createSlice } from '@reduxjs/toolkit';
import { ICategoriesState } from '../../interfaces';
import { categories } from '../../data';

const initialState: ICategoriesState = {
  categories,
  selectedCategoryId: 1,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
