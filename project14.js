/******MINI PROJETO 14 --FAIXA DE PREÇO  ********/
// criar um array de objetos de faixa de preço para
// que ela possa ser usada em um site igual o mercado livre

// Primeira opçao

let faixas = [
    { tolltip: 'até R$700', minimo: 0, maximo: 700 },
    { tolltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000 },
    { tolltip: 'R$1000 ou até mais', minimo: 1000, maximo: 9999999 },

];

// Segunda opção usando Factory Fanction
function criarPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixaPreco('a', 1, 100),
    criarFaixaPreco('b', 100, 1000),
    criarFaixaPreco('c', 1000, 10000),
]

console.log(faixas);
console.log(faixas2);