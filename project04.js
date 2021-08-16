/******MINI PROJETO 04 -- MEDIDOR DE VELOCIDADE ********/
// Velocidade maxíma de até 70
// A cada 5 Km acima do limite voçe ganha um ponto
// Math.floor()
// Caso maior que 12 -> "Carteira suspensa"

verificarVelocidade(85);

function verificarVelocidade(Velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('OK');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) /
            kmPorPonto));
        if (pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos', pontos);

    }
}
