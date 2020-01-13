function adicionarDiv() {
    var divElement = document.createElement('div');
    var text = document.createTextNode("TESTE");
    var body = document.body;

    divElement.style.height = 100;
    divElement.style.width = 100;
    divElement.style.backgroundColor = 'RED';

    body.appendChild(divElement);
}

var btnAdicionarDiv = document.getElementById("btnAdicionarDiv");
btnAdicionarDiv.onclick = adicionarDiv;