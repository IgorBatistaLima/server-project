const express = require('express');
const { getGames, getGame, addGame, updateGame, deleteGame } = require('../controllers/gameController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/games', authMiddleware, getGames);
router.get('/games/:id', getGame);
router.post('/games', addGame);
router.put('/games/:id', updateGame);
router.delete('/games/:id', deleteGame);


module.exports = router;