/*
    0 - Obter um usuario
    1 - Obter o numero de telefone de um usuario a partir de seu ID
    2 - Obter o endereço do usuario pelo ID
 */

function obterUsuario(){
    // Quando der algum problema -> reject(ERRO)
    // Quando der sucesso -> resolve
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: "Aladin",
                dataNascimento: new Date()
            })
        }, 1000)
    })
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })
}

obterUsuario()


