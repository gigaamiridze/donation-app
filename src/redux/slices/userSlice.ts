import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState, IUserData } from '../../interfaces';
import { RootState } from '../../redux';

const initialState: IUserState = {
  displayName: null,
  email: null,
  isLoggedIn: false,
  token: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<IUserData>) => {
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },
    updateToken: (state, action: PayloadAction<Promise<string> | undefined>) => {
      state.token = action.payload;
    },
  },
});

export const selectUserState = (state: RootState) => state.user; 
export const { resetUser, logIn, updateToken } = userSlice.actions;

export default userSlice.reducer;
