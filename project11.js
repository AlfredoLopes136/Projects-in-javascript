/******MINI PROJETO 11 --MONTADOR DE ENDEREÇO  ********/
// Criar um objeto endereço que contem:
// Rua
// Cidade
// CEP
// exibirEndereço(endereço)

let endereço = {
    Rua: 'avenida manoel pedro',
    Cidade: 'lapa',
    CEP: 8903444,
};

function exibirEndereço(endereço) {
    for (let chave in endereço)
        console.log(chave, endereço[chave]);
}
exibirEndereço(endereço);
