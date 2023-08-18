import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDonationsState } from '../../interfaces';
import { RootState } from '../../redux';
import { donations } from '../../data';

const initialState: IDonationsState = {
  donations,
  selectedDonationId: null,
};

const donationsSlice = createSlice({
  name: 'donations',
  initialState,
  reducers: {
    resetDonations: () => {
      return initialState;
    },
    updateSelectedDonationId: (state, action: PayloadAction<number>) => {
      state.selectedDonationId = action.payload;
    },
  },
});

export const selectDonationsState = (state: RootState) => state.donations;
export const { resetDonations, updateSelectedDonationId } = donationsSlice.actions;

export default donationsSlice.reducer;
