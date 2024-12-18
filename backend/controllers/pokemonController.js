const axios = require('axios');

// Fetch 20 Pokemons
const getPokemons = async (req, res) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemonData = await Promise.all(
            response.data.results.map(async (poke) => {
                const details = await axios.get(poke.url);
                return {
                    name: details.data.name,
                    image: details.data.sprites.front_default,
                };
            })
        );
        res.json(pokemonData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Pokemons' });
    }
};

// Fetch Pokemon by Name
const getPokemonByName = async (req, res) => {
    try {
        const { name } = req.params;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemon = {
            name: response.data.name,
            image: response.data.sprites.front_default,
            base_experience: response.data.base_experience,
            height: response.data.height,
            weight: response.data.weight,
        };
        res.json(pokemon);
    } catch (error) {
        res.status(404).json({ error: 'Pokemon not found' });
    }
};

module.exports = { getPokemons, getPokemonByName };
