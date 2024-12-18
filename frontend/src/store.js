import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './features/pokemonSlice';

// Configure the Redux store with reducers
export const store = configureStore({
    // Reducer mapping: Defines the structure of the Redux state
    reducer: {
        // The "pokemon" state slice is managed by the pokemonReducer
        pokemon: pokemonReducer,
    },
});

/*
Key Notes:
1. `configureStore`:
   - Simplifies the creation of the Redux store.
   - Automatically sets up good default configurations, such as enabling Redux DevTools and adding default middleware.

2. Reducer Mapping:
   - The key (`pokemon`) becomes the state slice name in the Redux store.
   - The value (`pokemonReducer`) is the reducer function managing that slice.

3. Expandability:
   - Additional reducers can be added here if needed in the future. For example:
     reducer: {
         pokemon: pokemonReducer,
         user: userReducer,
     }

4. Maintainability:
   - Keeping reducers modular (e.g., `pokemonSlice`) ensures easier testing and scaling.
*/
