import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base API URL for easier maintenance
const API_BASE_URL = 'http://localhost:5100/api/pokemon';

// Thunks for asynchronous actions
export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch pokemons');
    }
});

export const searchPokemon = createAsyncThunk('pokemon/searchPokemon', async (search, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${search.toLowerCase()}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Pokemon not found');
    }
});

export const fetchPokemonByName = createAsyncThunk('pokemon/fetchPokemonByName', async (name, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${name}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch pokemon');
    }
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
      pokemons: [],
      pokemon: null,
      loading: false,
      error: null,
  },
  reducers: {
      resetState: (state) => {
          state.pokemons = [];
          state.pokemon = null;
          state.loading = false;
          state.error = null;
      },
      setError: (state, action) => {
          state.error = action.payload; // Allow manual error setting
      },
  },
  extraReducers: (builder) => {
      builder
          .addCase(fetchPokemons.pending, (state) => {
              state.loading = true;
              state.error = null;
          })
          .addCase(fetchPokemons.fulfilled, (state, action) => {
              state.loading = false;
              state.pokemons = action.payload;
          })
          .addCase(fetchPokemons.rejected, (state, action) => {
              state.loading = false;
              state.error = action.payload || 'An error occurred';
          })
          .addCase(searchPokemon.fulfilled, (state, action) => {
              state.pokemons = [action.payload];
              state.error = null;
          })
          .addCase(searchPokemon.rejected, (state, action) => {
              state.error = action.payload || 'Pokemon not found';
          })
          .addCase(fetchPokemonByName.fulfilled, (state, action) => {
              state.pokemon = action.payload;
              state.error = null;
          })
          .addCase(fetchPokemonByName.rejected, (state, action) => {
              state.error = action.payload || 'An error occurred';
          });
  },
});


export default pokemonSlice.reducer;
