const express = require('express');
const router = express.Router();
const Game = require('../models/Game'); // Substitua pelo caminho correto do seu modelo de usuário
const { MockGames } = require('../mock/install'); // Substitua pelo caminho correto do seu arquivo install

router.get('/install', async (req, res) => {
    try {
        await Game.insertMany(MockGames);
        res.status(200).send('Games inseridos com sucesso!');
    } catch (error) {
        res.status(500).send('Erro ao inserir usuários: ' + error.message);
    }
});

module.exports = router;