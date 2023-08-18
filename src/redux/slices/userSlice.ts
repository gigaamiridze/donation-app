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
    resetUser: () => {
      return initialState;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
  },
});

export const selectUserState = (state: RootState) => state.user; 
export const { resetUser, setFirstName, setLastName } = userSlice.actions;

export default userSlice.reducer;
