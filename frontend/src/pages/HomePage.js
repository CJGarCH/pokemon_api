import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../features/pokemonSlice";
import SearchBar from "../components/SearchBar";
import PokemonCard from "../components/PokemonCard";
import DetailPage from "./DetailPage";

const HomePage = () => {
    const dispatch = useDispatch();
    const { pokemons, loading } = useSelector((state) => state.pokemon);

    // Local state to manage search queries and selected Pokémon
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    // Fetch all Pokémon when the component mounts if the list is empty
    useEffect(() => {
        if (pokemons.length === 0) {
            dispatch(fetchPokemons());
        }
    }, [dispatch, pokemons.length]); // Dependencies ensure this runs only when necessary

    // Filter Pokémon based on the search query
    const filteredPokemons = searchQuery.trim()
        ? pokemons.filter((pokemon) =>
              pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : pokemons; // Show the full list if no search query is provided

    // Modal management: Open the modal and set the selected Pokémon
    const openModal = (pokemonName) => setSelectedPokemon(pokemonName);

    // Modal management: Close the modal and clear the selected Pokémon
    const closeModal = () => setSelectedPokemon(null);

    return (
        <div className="App">
            <h1>Pokémon List</h1>

            {/* Search bar to update the search query */}
            <SearchBar setSearchQuery={setSearchQuery} />

            {/* Display the Pokémon grid or a loading message */}
            <div className="pokemon-grid">
                {loading ? (
                    <p>Loading...</p> // Show a loading state while fetching data
                ) : (
                    filteredPokemons.map((poke) => (
                        <PokemonCard
                            key={poke.id} // Unique key for each Pokémon
                            name={poke.name}
                            image={poke.image}
                            onClick={() => openModal(poke.name)} // Open modal when clicked
                        />
                    ))
                )}
            </div>

            {/* Display the detail modal if a Pokémon is selected */}
            {selectedPokemon && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside
                    >
                        <DetailPage name={selectedPokemon} closeModal={closeModal} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
