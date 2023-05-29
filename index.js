const express = require("express");
const connectToDatabase = require("./src/database/database")
const app = express();
const usuario = require("./src/router/usuario.router");

connectToDatabase();

const port = 3003;

app.use(express.json());

app.use("/usuario", usuario);

app.get("/", (request, response) => {
    response.send("Olá Mundo, testando ...");
});

app.get("/contato", (request, response) => {
    response.send("Nosso contato email@email.com");
});

app.listen(port, () => {
    console.log(`Servidor iniciado e rodando em http://localhost:${port}`);
});




