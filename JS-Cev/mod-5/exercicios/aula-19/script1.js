function contar(){

    var ini = document.getElementById('iinicio')
    var passo = document.getElementById('ipasso')
    var fim = document.getElementById('ifim')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam Elementos')
    } else {
        res.innerHTML = 'contando: '

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f; c += p)
    }  
}
