import { createSlice } from '@reduxjs/toolkit';

// Initial state representing not logged in
const initialState = {
  isloggedin: true,
};


const Loginslice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    toggleLogin: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// Export actions
export const { setLogin, toggleLogin, logout } = Loginslice.actions;

// Export reducer
export default Loginslice.reducer;
