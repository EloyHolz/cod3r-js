function tabuada(){
    let num = document.getElementById('inum')
    let tab = document.getElementById('itab')

    if (num.value.length == 0){
        window.alert('[ERRO] Por Favor, digite um número')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        // para limpar a area de tabuada antes de começar
        for (let c = 1; c <= 10; c++){
            let op = document.createElement('option')
            op.innerHTML= `${n} x ${c} x ${n*c}`
            op.value = `${c}`
            tab.appendChild(op)
        }
    }
}