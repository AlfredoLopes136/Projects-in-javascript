/******MINI PROJETO 10 --NUMEROS PRIMOS  ********/
// Criar uma função para exibir números primos 
// primos = divisivel apenas por 1 ou ele mesmo
// Compostos
exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        if (NumeroPrimo(numero)) console.log(numero);
    }
}
function NumeroPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;

}