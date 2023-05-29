const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose.connect('mongodb://localhost:27017/entrega3', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MongoDB CONECTADO COM SUCESSO!");
    }).catch((err) => {
        return console.log(`Erro na conexão com o banco: ${err}`);
    })
}

module.exports = connectToDatabase