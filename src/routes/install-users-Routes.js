const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Substitua pelo caminho correto do seu modelo de usuário
const { MockUsers } = require('../mock/install'); // Substitua pelo caminho correto do seu arquivo install

router.get('/install', async (req, res) => {
    try {
        await User.insertMany(MockUsers);
        res.status(200).send('Usuários inseridos com sucesso!');
    } catch (error) {
        res.status(500).send('Erro ao inserir usuários: ' + error.message);
    }
});

module.exports = router;