const bcrypt = require('bcrypt');

const MockUsers = [
    {
        name: "admin",
        email: "admin@email.com",
        password: bcrypt.hashSync("admin", 10),
    },
    {
        name: "User comum 1",
        email: "usercomum1@email.com",
        password: bcrypt.hashSync("usercomum1", 10),
    },
    {
        name: "User comum 2",
        email: "usercomum2@email.com",
        password: bcrypt.hashSync("usercomum2", 10),
    },
    {
        name: "User comum 3",
        email: "usercomum3@email.com",
        password: bcrypt.hashSync("usercomum3", 10),
    },
    {
        name: "User comum 4",
        email: "usercomum4@email.com",
        password: bcrypt.hashSync("usercomum4", 10),
    }
];


const MockGames = [
    {
        name: "The Legend of Zelda: Breath of the Wild",
        year: 2017,
        description: "Um jogo de ação e aventura em um mundo aberto que redefine o gênero.",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a4/The_Legend_of_Zelda_Breath_of_the_Wild_cover.jpg",
        price: 59.99,
        category: "Aventura"
    },
    {
        name: "Red Dead Redemption 2",
        year: 2018,
        description: "Um jogo de ação e aventura ambientado no Velho Oeste com uma narrativa rica e um mundo aberto expansivo.",
        image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_2_cover_art.jpg",
        price: 59.99,
        category: "Ação"
    },
    {
        name: "The Witcher 3: Wild Hunt",
        year: 2015,
        description: "Um RPG de ação com um vasto mundo aberto e uma narrativa envolvente.",
        image: "https://upload.wikimedia.org/wikipedia/en/3/34/The_Witcher_3_Wild_Hunt_cover.jpg",
        price: 39.99,
        category: "RPG"
    },
    {
        name: "Cyberpunk 2077",
        year: 2020,
        description: "Um RPG de mundo aberto ambientado em uma cidade futurista distópica.",
        image: "https://upload.wikimedia.org/wikipedia/en/9/9e/Cyberpunk_2077_cover.jpg",
        price: 59.99,
        category: "RPG"
    },
    {
        name: "Hades",
        year: 2020,
        description: "Um roguelike de ação com uma narrativa inspirada na mitologia grega.",
        image: "https://upload.wikimedia.org/wikipedia/en/2/2d/Hades_game_cover_art.jpg",
        price: 24.99,
        category: "Ação"
    },
];

module.exports = {
    MockGames,
    MockUsers
}
