function contar(){

    var ini = document.getElementById ('iinicio')
    var passo = document.getElementById('ipasso')
    var fim = document.getElementById('ifim')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // importante pegar o value para poder comparar com o numero, se nao ele nao vai fazer
        res.innerHTML = '[ERRO] Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'


        // O valor q vem do input nao vem como number -> tem q sempre convreter
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('[ERRO] Passo inválido! Considerando Passo = 1')
            p = 1
        }

        if(i < f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} ` 
               
                // Lembrando -> +=: Este operador é usado para concatenar uma string ao conteúdo HTML existente do elemento. Em outras palavras, ele está adicionando ao conteúdo já existente.
               
                // Para usar emoji no JS -> tira o + e o maiusculo; coloca o codigo entre {}; coloca barra invertida \ u{codigo} + so funciona entre craáses ` `
            }
        } else {
            for (let c= i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449} `
                // Para contar de trás para frente
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }   
}