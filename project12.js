/******MINI PROJETO 12 -- IGUALDADE DE OBJETOS ********/
// Iagualdade de Objetos (exercicio)

function Endereco(rua, cidade, cep) {
    this.rua = rua,
        this.cidade = cidade,
        this.cep = cep
}

const endereço1 = new Endereco('a', 'b', 'c');
const endereço2 = new Endereco('a', 'b', 'c');

function saoIguais(endereco1, endereco2) {
    // comparar se as propriedades sao iguais
    return endereco1.rua == endereco2.rua &&
        endereco1.cidade == endereco2.cidade &&
        endereco1.cep == endereco2.cep
}

console.log(saoIguais(endereço1, endereço2));

function temEnderecoMemoriaIguais(endereco1, endereco2) {
    // comparando se as referencias do objeto aponta para o mesmo local
    return endereco1 === endereco2;
}

console.log(temEnderecoMemoriaIguais(endereço1, endereço2));
