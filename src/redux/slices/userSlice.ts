import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../../interfaces';
import { RootState } from '../../redux';

const initialState: IUserState = {
  id: 1,
  firstName: 'Giga',
  lastName: 'Amiridze',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    resetUser: () => {
      return initialState;
    },
  },
});

export const selectUserState = (state: RootState) => state.user; 
export const { setFirstName, setLastName, resetUser } = userSlice.actions;

export default userSlice.reducer;
