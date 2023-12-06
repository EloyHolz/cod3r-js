function verificar() 
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector("div#res")

    if (fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert ('[ERRO] Verifique os dados e tente novamente')

    } else {

        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if  (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 &&  idade < 10) {
                // Criança
                img.setAttribute('src', 'menino.png')
            }
            else if(idade >= 10 && idade < 20){
                // Adolescente
                img.setAttribute('src', 'jovemhomem.png')
            }
            else if (idade >= 20 && idade < 50){
                // adulto
                img.setAttribute('src', 'adulto.png')
            }
            else{
                // Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked)   {
            if(idade >= 0 &&  idade < 10) {
                // Criança
                img.setAttribute('src', 'menina.png')
            }
            else if(idade >= 10 && idade < 20){
                // Adolescente
                img.setAttribute('src', 'jovemmulher.png')
            }
            else if (idade >= 20 && idade < 50){
                // adulto
                img.setAttribute('src', 'adulta.png')
            }
            else{
                // Idoso
                img.setAttribute('src', 'idosa.png')
        }
             }

    res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos de idade`
    res.appendChild(img)

}}