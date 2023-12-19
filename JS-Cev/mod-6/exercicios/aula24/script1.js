// Configurações globais
let num = document.querySelector ('input#inum')
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
        // Para adiconar valores -> mas ainda nao aparecem
        valores.push(Number(num.value))

        // Permitindo que os valores adiconados aparecam na area selecionada = select
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)

   } else {
    window.alert ('[ERRO] Valor inválido ou já adicionado;')
   }
   // para independente de dar certo ou errado, apos escrever, apagar o numero do imput 1 e focar nele

num.value = ''
num.focus()
}


function finalizar(){

} 