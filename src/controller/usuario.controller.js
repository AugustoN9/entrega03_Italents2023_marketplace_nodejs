const Usuario = require("../model/usuario")

const find = async (request, response) => {
    try {
        const id = request.params.id;
        const usuarioEncontrado = Usuario.findById(id);
        //return response.status(200).send(await Usuario.findById(id));

        console.log("===> Usuario ENCONTRADO! <===");
        return response.status(200).send(await usuarioEncontrado);

    }
    catch (err) {
        return response.status(400).send(await { message: "Não foi possivel localizar este id" });
    }
}

const findAllUsuarios = async (requeste, response) => {
    return response.status(200).send(await Usuario.find());
}

const createUsuario = async (request, response) => {
    const usuario = request.body;

    if (Object.keys(usuario).length === 0) {
        return response.status(400).send({ message: "O corpo da mensagem esta vazio" });
    }

    else if (!usuario.username) {
        return response.status(400).send({ message: "O campo 'username' não foi encontrado!" });
    }
    else if (!usuario.nome) {
        return response.status(400).send({ message: "O campo 'nome' não foi encontrado!" });
    }
    else if (!usuario.cpf) {
        return response.status(400).send({ message: "O campo 'cpf' não foi encontrado!" });
    }


    return response.status(201).send(Usuario.create(usuario));
    console.log("Usuario CADASTRADO COM SUCESSO!");
}

const updateUsuario = async (request, response) => {
    try {
        const id = request.params.id;
        const usuario = request.body;

        if (Object.keys(usuario).length === 0) {
            return response.status(400).send({ message: "O corpo da mensagem esta vazio" });
        }

        else if (!usuario.username) {
            return response.status(400).send({ message: "O campo 'username' não foi encontrado!" });
        }
        else if (!usuario.nome) {
            return response.status(400).send({ message: "O campo 'nome' não foi encontrado!" });
        }
        else if (!usuario.cpf) {
            return response.status(400).send({ message: "O campo 'cpf' não foi encontrado!" });
        }
        console.log("### => ATUALIZADO COM SUCESSO! <= ###");
        return response.status(200).send(await Usuario.findByIdAndUpdate(id, usuario, { returnDocument: "After" }));

    }
    catch (err) {
        return response.status(404).send({ message: "Usuario NÃO FOI ENCONTRADO!" });
    }

}

const deleteUsuario = async (request, response) => {
    try {
        const id = request.params.id;
        console.log("*** => Usuario EXCLUIDO do Sistema! <= ***");
        return response.status(200).send(await Usuario.findByIdAndRemove(id));
    }
    catch (err) {
        return response.status(400).send({ message: "Não foi possivel localizar este id" });
    }
}

module.exports = {
    find,
    findAllUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario
}