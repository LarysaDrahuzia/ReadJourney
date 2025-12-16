import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  registerUser,
  logOut,
  refreshUser,
  addToMyLibrary,
  removeFromMyLibrary,
} from './operations.js';

const handlePending = state => {
  state.isRefreshing = true;
};
const handleReject = (state, { payload }) => {
  state.isRefreshing = false;
  state.error = payload;
};

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      library: [],
    },
    token: null,
    error: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      .addCase(registerUser.rejected, handleReject)
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      .addCase(loginUser.rejected, handleReject)
      .addCase(logOut.fulfilled, state => {
        state.error = null;
        state.user = { name: null, email: null, library: [] };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = Boolean(action.payload.token);
        state.isRefreshing = false;
      })

      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.user = { name: null, email: null, library: [] };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(addToMyLibrary.pending, handlePending)
      .addCase(addToMyLibrary.fulfilled, (state, action) => {
        state.error = null;
        state.user.library = action.payload;
        state.isRefreshing = false;
      })
      .addCase(addToMyLibrary.rejected, handleReject)
      .addCase(removeFromMyLibrary.pending, handlePending)
      .addCase(removeFromMyLibrary.fulfilled, (state, action) => {
        state.error = null;
        state.isRefreshing = false;
        state.user.library = action.payload;
      })
      .addCase(removeFromMyLibrary.rejected, handleReject),
});

export default slice.reducer;
