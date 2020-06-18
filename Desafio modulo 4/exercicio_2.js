function listaRepos() {
    var usuario = document.querySelector('input[name=user]').value;
    var myApp = document.querySelector('div#app');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/' + usuario + '/repos');
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var lista = document.createElement('ul');
            var response = JSON.parse(xhr.responseText);
            for (item of response){
                var itens = document.createElement('li');
                var textoItem = document.createTextNode(item.name);
                itens.appendChild(textoItem);
                lista.appendChild(itens);
            }
            myApp.appendChild(lista);
        }
    }
    
    
}