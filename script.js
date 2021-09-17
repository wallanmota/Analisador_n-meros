function add(){
    let numero = document.querySelector('#numero').value;
    let numAd = document.querySelector('#numAd');
    let item = document.createElement('option');

    if(Number(numero) < 1 || Number(numero) > 100 || numero.length == 0 ){
        alert('Valor inválido')
    }else{
        item.text = `Valor ${numero} adicionado`;
        numAd.appendChild(item);
        numAdicionado.push(numero)
        console.log(numAdicionado)
    }
}
let numAdicionado = [];
numAdicionado.sort();
let quantItem = numAdicionado.length;

function enviar(){
    let quantidade = document.querySelector('#quantidade')
    let maior = document.querySelector('#maior')
    let menor = document.querySelector('#menor')
    let soma = document.querySelector('#soma')
    let media = document.querySelector('#media')

    quantidade.innerHTML = `Ao todo, temos ${numAdicionado.length} números cadastrados.`;
    maior.innerHTML = `O maior valor informado foi ${numAdicionado[Number(quantItem)]}`;
}
