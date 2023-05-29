const Usuario = require("../model/usuario");
const jwt = require("jsonwebtoken");

const loginService = (email) => Usuario.findOne({ email });

const generateToken = (user, segredo) => jwt.sign({ user }, segredo);
// O parametro expiresIn [  { expiresIn: 86400 } ]define o tempo de validade do token

module.exports = {
    loginService,
    generateToken
};