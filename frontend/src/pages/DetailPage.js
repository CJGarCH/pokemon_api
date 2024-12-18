import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonByName } from "../features/pokemonSlice";

const DetailPage = ({ name, closeModal }) => {
    const dispatch = useDispatch();
    const { pokemon, loading, error } = useSelector((state) => state.pokemon);

    // Fetch the Pokémon details by name whenever the "name" prop changes
    useEffect(() => {
        if (name) {
            dispatch(fetchPokemonByName(name));
        }
    }, [dispatch, name]); // Dependencies ensure this runs only when necessary

    if (loading) {
        return <p>Loading...</p>; // Show loading state while fetching data
    }

    if (error) {
        return <p>Error: {error}</p>; // Handle and display any errors from the fetch
    }

    if (!pokemon) {
        return <p>Pokémon not found.</p>; // Fallback when no Pokémon data is available
    }

    return (
        <div className="detail-page">
            {/* Close button triggers the parent-provided closeModal function */}
            <button onClick={closeModal} className="close-button">
                Close
            </button>

            {/* Display Pokémon details */}
            <img src={pokemon.image} alt={pokemon.name} />
            <h1>{pokemon.name}</h1>
            <p>Base Experienc: {pokemon.base_experience}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
        </div>
    );
};

export default DetailPage;
