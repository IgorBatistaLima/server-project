const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models/User');
const { check, validationResult } = require('express-validator');
const logger = require('../config/logger');
require('dotenv').config();

// Função para obter o IP do cliente
const getClientIp = (req) => {
    return req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip;
};

const register = async (req, res, next) => {
    const { username, email, password, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.json({ message: 'Registration successful' });
    } catch (error) {
        logger.error(`Registration failed: ${error.message} - IP: ${getClientIp(req)} - Method: ${req.method}`); // Registro de erros com detalhes
        next(error);
    }
};

// Função para login de usuário
const login = [
    // Validação de entrada
    check('username').notEmpty().withMessage('Username is required'),
    check('password').notEmpty().withMessage('Password is required'),

    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Envio de mensagens de validação do servidor
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, password } = req.body;

        try {
            const user = await User.findOne({ username });

            if (!user) {
                logger.error(`User not found - IP: ${getClientIp(req)} - Method: ${req.method}`); // Registro de erros com detalhes
                return res.status(404).json({ message: 'User not found' });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                logger.error(`Incorrect password - IP: ${getClientIp(req)} - Method: ${req.method}`); // Registro de erros com detalhes
                return res.status(401).json({ message: 'Incorrect password' });
            }

            const payload = { _id: user._id, role: user.role };
            const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '24h' });

            res.json({ token });
        } catch (error) {
            logger.error(`Login failed: ${error.message} - IP: ${getClientIp(req)} - Method: ${req.method}`); // Registro de erros com detalhes
            next(error);
        }
    }
];

module.exports = { register, login, getClientIp };
