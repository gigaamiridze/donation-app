import { createSlice } from '@reduxjs/toolkit';
import { ICategoriesState } from '../../interfaces';
import { categories } from '../../data';
import { RootState } from '../../redux';

const initialState: ICategoriesState = {
  categories,
  selectedCategoryId: 1,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export const selectCategoriesState = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
