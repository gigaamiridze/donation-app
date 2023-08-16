import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../interfaces';

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
  },
});

export default userSlice.reducer;
