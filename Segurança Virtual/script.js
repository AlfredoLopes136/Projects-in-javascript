function verificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas',
        'Carol', 'Jhonatan']
    if (ConvidadosCristian.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Voçe pode entrar!'

    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Voçe não pode entrar'
    }
}