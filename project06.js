/******MINI PROJETO 06 -- ENCONTRE O STRING ********/
// Crie um método para ler propriedades de uma string e
// exibir somente as propriedades do tipo string que estao nesse objeto

const filme = {
    titulo: 'vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}
exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])

}