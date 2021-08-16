/*******MINI PROJETO 03 -- FIZZBUZZ *******/
// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel tanto por 3 como por 5 => FizzBuzz
// Não e divisivel por nenhum desses valores => o mesmo valor

const resultado = fizzBuzz('al');
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';

    return entrada;

}
