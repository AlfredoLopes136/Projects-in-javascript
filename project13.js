/******MINI PROJETO 13 -- MONTADOR DE POSTAGEM DE BLOG********/
// Criar um objeto postagem que vai conter as seguintes propriedades
/*
titulo
mensagem
autor
vizualizações
comentarios (array)
(autor, mensagem)

estaAoVivo */

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    vizualizacoes: 10,
    comentario: [
        { autor: 'a', mensagem: 'b' },
        { autor: 'a', mensagem: 'b' }
    ],
    estaAoVivo: true
}

console.log(postagem);