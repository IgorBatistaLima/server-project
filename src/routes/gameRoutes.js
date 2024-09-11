const express = require('express');
const { getGames, getGame, addGame, updateGame, deleteGame } = require('../controllers/gameController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const checkCache = require('../middlewares/cache');
const NodeCache = require("node-cache");
const myCache = new NodeCache();

router.get('/games', authMiddleware, checkCache, getGames);
router.get('/games/:id', checkCache, getGame);

router.post('/games', (req, res, next) => {
    myCache.del('/games');
    addGame(req, res, next).then(() => {
    }).catch(next);
});

router.put('/games/:id', (req, res, next) => {
    myCache.del('/games');
    myCache.del(`/games/${req.params.id}`);
    updateGame(req, res, next).then(() => {
    }).catch(next);
});

router.delete('/games/:id', (req, res, next) => {
    myCache.del('/games');
    myCache.del(`/games/${req.params.id}`);
    deleteGame(req, res, next).then(() => {
    }).catch(next);
});

module.exports = router;
