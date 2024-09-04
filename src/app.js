const express = require('express');
const conect = require('./config/db');
const gameRoutes = require('./routes/gameRoutes');
const userRoutes = require('./routes/userRoutes');
const installgameRoutes = require('./routes/install-games-Routes');
const installusersRoutes = require('./routes/install-users-Routes');
require('dotenv').config();
const app = express();
const cors = require('cors');

conect();
app.use(cors());
app.use(express.json());

app.use('/api/games', gameRoutes);
app.use('/api/users', userRoutes);
app.use('/api/install-games', installgameRoutes);
app.use('/api/install-users', installusersRoutes);



module.exports = app;