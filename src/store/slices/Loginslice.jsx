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
      state.isloggedin = action.payload;
    },
    toggleLogin: (state) => {
      state.isloggedin = !state.isloggedin;
    },
    logout: (state) => {
      state.isloggedin = false;
    },
  },
});

// Export actions
export const { setLogin, toggleLogin, logout } = Loginslice.actions;

// Export reducer
export default Loginslice.reducer;
