import {createSlice} from '@reduxjs/toolkit';

export const main = createSlice({
  name: 'main',
  initialState: {
    data: {},
    pokemons: [],
    results: [],
  },
  reducers: {
    getPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    saveResult: (state, action) => {
      state.results.unshift(action.payload);
    },
    clearResult: state => {
      state.results = [];
    },
  },
});

export const {getPokemons, saveResult, clearResult} = main.actions;
export default main.reducer;
