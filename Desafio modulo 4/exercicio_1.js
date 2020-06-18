function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        if (idade > 18) {
            setTimeout(resolve, 2000);
        } else {
            setTimeout(reject, 2000);
        }
    });
}

checaIdade(15)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        console.log("Menor que 18");
    });