
/******MINI PROJETO 07 -- MULTIPLO DE 3 E 5 ********/
// Criar uma funcao somar que retorna a 
// soma de todos os multiplos de 3 e 5

// Multiplos de 3 dentro de 10 = 3 6 9
// Multiplo de 5 = 5 10

// Somando os multiplos
// Armazenar os multiplos de 3
// Armazenar os multiplos de 5
// Somar os dois

somar(10);
function somar(limite) {
    let multiploDe3 = 0;
    let multiploDe5 = 0;
    for (i = 0; i <= limite; i++) {
        if (i % 3 === 0)
            multiploDe3 += i;
        if (i % 5 === 0)
            multiploDe5 += i;
    }
    console.log(multiploDe3 + multiploDe5);

}