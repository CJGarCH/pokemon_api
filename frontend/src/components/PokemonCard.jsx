import React from 'react';
import PropTypes from 'prop-types';
import "../App.css";

const PokemonCard = ({ name, image, onClick }) => {
    return (
        <div
            className="pokemon-card"
            onClick={onClick} // Trigger the parent's onClick handler
            style={{ margin: '10px', cursor: 'pointer' }}
            aria-label={`Card for ${name}`} // Improves accessibility
        >
            <img 
                src={image} 
                alt={name} // Improved alt text for better accessibility
                width="100" 
                loading="lazy" // Improves performance by deferring offscreen image loading
            />
            <h4>{name}</h4>
        </div>
    );
};

PokemonCard.propTypes = {
    name: PropTypes.string.isRequired, // Ensure name is a required string
    image: PropTypes.string.isRequired, // Ensure image is a required string
    onClick: PropTypes.func.isRequired, // Ensure onClick is a required function
};

export default PokemonCard;
