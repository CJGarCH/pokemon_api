const express = require('express');
const cors = require('cors');
const app = express();
const pokemonRoutes = require('./routes/pokemon');

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/pokemon', pokemonRoutes);

const PORT = 5100;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
