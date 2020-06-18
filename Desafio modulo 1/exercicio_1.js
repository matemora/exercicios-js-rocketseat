function endereco(end) {
    var resultado = ('O usuário mora em ' + end.cidade + ' / ' + end.uf + ', no bairro ' + end.bairro + ', na rua "' + end.rua + '" com n° ' + end.numero + '.');
    return resultado;
}

var dados = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

console.log(endereco(dados));