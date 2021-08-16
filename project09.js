
/******MINI PROJETO 09 -- CONTADOR DE ASTERISCOS ********/
// Criar uma função que exibe a quantidade de *
// que ela possui
exibirAsteriscicos(10);

function axibirAsteristicos(linhas) {
    /* let padrao = '';
     for (let linha = 1; linha <= linhas; linha++) {
         padrao += '*';
         console.log(padrao);
     }*/
    for (let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for (let i = 0; i < linha; i++) {
            padrao += '*';
        }
        console.log(padrao);
    }
}