import React, { useCallback } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce"; // Install using `npm install lodash.debounce`
import "../App.css";

const SearchBar = ({ setSearchQuery }) => {
    // Debounced function using useCallback
    const debouncedSetSearchQuery = useCallback(
        debounce((value) => setSearchQuery(value), 300), // Adjust delay (300ms)
        []
    );

    const handleChange = (e) => {
        debouncedSetSearchQuery(e.target.value); // Pass the input value to the debounced function
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search Pokémon"
                onChange={handleChange} // Inline function
                aria-label="Search Pokémon"
            />
        </div>
    );
};

SearchBar.propTypes = {
    setSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
