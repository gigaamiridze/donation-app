import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  reducers: {
    updateSelectedCategoryId: (state, action: PayloadAction<number>) => {
      state.selectedCategoryId = action.payload;
    },
    resetCategories: () => {
      return initialState;
    },
  },
});

export const selectCategoriesState = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
