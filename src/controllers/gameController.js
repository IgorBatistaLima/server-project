
const Game = require('../models/Game');

exports.getGames = async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    } catch (error) {
        res.json({ message: 'Error getting games' });
    }
};

exports.getGame = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        res.json(game);
    } catch (error) {
        res.json({ message: 'Error getting game' });
    }
};

exports.addGame = async (req, res) => {
    try {
        const { name, year, description, image, price, category } = req.body;
        const game = new Game({
            name,
            year,
            description,
            image,
            price,
            category
        });
        await game.save();
        res.json({ message: 'Game created' });
    } catch (error) {
        console.log(error);
        res.json({ message: 'Error creating game' });
    }
};

exports.updateGame = async (req, res) => {
    try {
        const { name, year, description, image, price, category } = req.body;
        await Game.findByIdAndUpdate(req.params.id, {
            name,
            year,
            description,
            image,
            price,
            category
        });
        res.json({ message: 'Game updated' });
    } catch (error) {
        res.json({ message: 'Error updating game' });
    }
};

exports.deleteGame = async (req, res) => {
    try {
        await Game.findByIdAndDelete(req.params.id);
        res.json({ message: 'Game deleted' });
    } catch (error) {
        res.json({ message: 'Error deleting game' });
    }
};
