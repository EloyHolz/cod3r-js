function contar(){
    var ini = window.document.querySelector('div#iinico')
    var pas = window.document.querySelector("div#ipasso")
    var fim = window.document.querySelector("div#ifim")
    var res = window.document.querySelector("div#resultado")


    if (fim==0){
        window.alert("[ERRO] O Fim não pode ser igual a 0! Altere sua opção.");
        return
    }
    if (pas==0){
        window.alert("[ERRO] O Passo não pode ser igual a 0! Altere sua opção.");
        
    }

    for (var i = ini; i<=fim; i+= pas){
        res += i + ''
    }

    res.innerHTML (`${res}`)
}