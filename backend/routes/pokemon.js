const express = require('express');
const router = express.Router();
const { getPokemons, getPokemonByName } = require('../controllers/pokemonController');

router.get('/', getPokemons);
router.get('/:name', getPokemonByName);

module.exports = router;
