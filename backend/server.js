// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/chess_game', { useNewUrlParser: true, useUnifiedTopology: true });

// Define routes and handle game-related logic

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// backend/server.js

const gameRoutes = require('./routes/gameRoutes');
app.use('/api/games', gameRoutes);
