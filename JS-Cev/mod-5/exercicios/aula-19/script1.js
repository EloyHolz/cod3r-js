function contar(){
    let  ini = window.document.querySelector('div#iinico')
    let  pas = window.document.querySelector("div#ipasso")
    let fim = window.document.querySelector("div#ifim")
    let  res = window.document.querySelector("div#resultado")

    if(ini.value.length==0 || fim.value.length==0 || pas.value.length==0){
        window.alert("[Erro] Faltam dados")
    } else{
        window.alert("Tudo ok!")
    }

}