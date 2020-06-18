function listaRepos() {
    var tela = document.querySelector('ul')
    tela != null ? tela.remove() : '';
    var myApp = document.querySelector('div#app');
    var carregandoUl = document.createElement('ul');
    var carregandoLi = document.createElement('li')
    var carregandoTxt = document.createTextNode('Carregando...');
    carregandoLi.appendChild(carregandoTxt);
    carregandoUl.appendChild(carregandoLi);
    myApp.appendChild(carregandoUl);

    retornaRepos()
        .then(function (response) {
            var tela = document.querySelector('ul')
            tela.remove();

            var lista = document.createElement('ul');
            for (item of response) {
                var itens = document.createElement('li');
                var textoItem = document.createTextNode(item.name);
                itens.appendChild(textoItem);
                lista.appendChild(itens);
            }
            myApp.appendChild(lista);
            clearInterval(timer);
        })
        .catch(function (error) {
            var tela = document.querySelector('ul');
            tela.remove();

            var errUl = document.createElement('ul');
            var errLi = document.createElement('li');
            var errTxt = document.createTextNode(error);
            errLi.appendChild(errTxt);
            errUl.appendChild(errLi);
            myApp.appendChild(errUl);
            clearInterval(timer);
        });
     var counter = 0;
     var timer = setInterval(() => {
         counter++;
         var count = document.querySelector('p#count');
         count.innerHTML = counter;
     }, 1);
}

var retornaRepos = function () {
    return new Promise(function (resolve, reject) {
        var usuario = document.querySelector('input[name=user]').value;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/' + usuario + '/repos');
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Usuário não existe');
                }
            }
        }
    });
}