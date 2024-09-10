const express = require('express');
const helmet = require('helmet');
const connect = require('./config/db');
const gameRoutes = require('./routes/gameRoutes');
const userRoutes = require('./routes/userRoutes');
const installgameRoutes = require('./routes/install-games-Routes');
const installusersRoutes = require('./routes/install-users-Routes');
require('dotenv').config();
const app = express();
const cors = require('cors');


connect();


const allowedOrigins = ['http://localhost:5173', 'https://server-project-orcin.vercel.app/'];


const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};


app.options('*', cors(corsOptions)); 


app.use(express.json());
app.use(helmet());

app.use('/api/games', gameRoutes);
app.use('/api/users', userRoutes);
app.use('/api/install-games', installgameRoutes);
app.use('/api/install-users', installusersRoutes);

module.exports = app;
