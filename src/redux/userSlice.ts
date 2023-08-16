import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from '../interfaces';

const initialState: IUserState = {
  id: 1,
  firstName: 'Giga',
  lastName: 'Amiridze',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
