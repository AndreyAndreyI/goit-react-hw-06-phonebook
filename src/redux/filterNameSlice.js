import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    changeArrayByFind(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { changeArrayByFind } = filterSlice.actions;
export default filterSlice.reducer;