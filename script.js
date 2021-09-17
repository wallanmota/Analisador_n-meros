let numAdicionado = [];

function add(){
    let numero = document.querySelector('#numero');
    let numAd = document.querySelector('#numAd');
    let item = document.createElement('option');

    function numRepetido(){
        for(let i = 0; i < numAdicionado.length; i++){
            if(Number(numero.value) == Number(numAdicionado[i])){
                return false
            }
        }
    }
    if(numRepetido() == false){
        alert('Número já cadastrado')
    }
    else if(Number(numero.value) < 1 || Number(numero.value) > 100 || numero.length == 0 ){
        alert('Valor inválido')
    }else{
        item.text = `Valor ${numero.value} adicionado`;
        numAd.appendChild(item);
        numAdicionado.push(numero.value);
    }
    
    document.querySelector('#resultado').style.display = 'none';
}

function enviar(){
    var quantItem = numAdicionado.length;
    numAdicionado.sort((a,b)=>{return a-b});
    
    if(quantItem == 0){
        alert(`Adicione um valor antes de finalizar`)
    }
    else{
        let quantidade = document.querySelector('#quantidade')
        let maior = document.querySelector('#maior')
        let menor = document.querySelector('#menor')
        let soma = document.querySelector('#soma')
        let media = document.querySelector('#media')

        quantidade.innerHTML = `Ao todo, temos ${quantItem} números cadastrados.`;
        maior.innerHTML = `O maior valor informado foi ${numAdicionado[quantItem -1]}`;
        menor.innerHTML = `O menor valor informado foi ${numAdicionado[0]}`;
        soma.innerHTML = `Somando todos os valores, temos ${sum()}`;
        media.innerHTML = `A média dos valores digitados é ${sum()/quantItem}`;
    }
    document.querySelector('#resultado').style.display = 'block'
}

function sum(){
    let soma = 0
    for(let i = 0; i < numAdicionado.length; i++){
        soma += Number(numAdicionado[i])
    }return soma
}


