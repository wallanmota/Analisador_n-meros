let num = document.querySelector('#numero');
let numAd = document.querySelector('#numAd');
let resultado = document.querySelector('#resultado');
let valores= [];

function isNum(n=0){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){
    if(isNum(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        numAd.appendChild(item);
        resultado.innerHTML = '';
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '';
    num.focus();
};

function enviar(){
    if(valores.length == 0){
        alert(`Adicione velores antes de finalizar`)
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos];
            if(valores[pos] > maior){
                maior = valores[pos]
            }    
            if(valores[pos] < menor){
                menor = valores[pos]
            }    
        
        }
        media = soma / total;

        resultado.innerHTML = '';
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resultado.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        resultado.innerHTML += `<p>A média dos valores informados é ${media}</p>`
    }
};