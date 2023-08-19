import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDonationsState } from '../../interfaces';
import { RootState } from '../../redux';
import { donations } from '../../data';

const initialState: IDonationsState = {
  donations,
  selectedDonationId: null,
  selectedDonationInformation: null,
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
    updateSelectedDonationInformation: (state, action: PayloadAction<number>) => {
      state.selectedDonationInformation = state.donations.find(
        item => item.donationItemId === action.payload,
      );
    },
  },
});

export const selectDonationsState = (state: RootState) => state.donations;
export const { 
  resetDonations, 
  updateSelectedDonationId, 
  updateSelectedDonationInformation 
} = donationsSlice.actions;

export default donationsSlice.reducer;
