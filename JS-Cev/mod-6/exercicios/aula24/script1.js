// Configurações globais
let num = document.querySelector('input#inum')
let lista = document.querySelector('select#itab')
let res = document.querySelector ('div#resultado')
let valores = [ ]

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else { 
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
   if (isNumero(num.value) && !inLista(num.value, valores)){
    window.alert("Tudo Tranquilo Chefe!")
   } else {
    window.alert ('[ERRO] Valor inválido ou já adicionado')
   }
}


function finalizar(){

}