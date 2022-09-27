/*
    0 - Obter um usuario
    1 - Obter o numero de telefone de um usuario a partir de seu ID
    2 - Obter o endereço do usuario pelo ID
 */

function obterUsuario(callback){
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: "Aladin",
            dataNascimento: new Date()
        })
    }, 1000)
}

// callback por padrão é sempre o ultimo parametro
function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: '1197199999',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000)
}

function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario) {
    // null || "" || 0 é igual a false no javascript
    if(error){
        console.error('ERRO EM USUARIO', error)
        return
    }
    // obter telefone envia id do usuario como primeiro parametro e uma função como segundo parametro
    obterTelefone(usuario.id, function resolverUsuario(error1, telefone) {
        if(error1){
            console.error('ERRO EM TELEFONE', error1)
            return
        }
        
        obterEndereco(usuario.id, function resolverUsuario(error2, endereco) {
            if(error2){
                console.error('ERRO EM ENDEREÇO', error2)
                return
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua} nº ${endereco.numero},
                Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
})


