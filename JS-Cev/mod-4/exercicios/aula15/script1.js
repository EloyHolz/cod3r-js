

function carregar(){

    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
  

    msg.innerHTML = `Agora são <strong>${hora}</strong> horas!`;

    if (hora >= 0 && hora <= 12) {
        // Bom Dia
        img.src = 'manha.png';
        document.body.style.background ='#F9800B'
        
    } else if (hora > 12 && hora <= 17) {
        // Boa tarde
        img.src = 'tarde.png';
        document.body.style.background ='#EF730F'
    } else {
        // Boa Noite
        img.src = 'noite.png'
        document.body.style.background ='#002961'
    }
}
