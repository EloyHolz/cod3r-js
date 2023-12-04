var agora = new Date()
var hora = agora.getHours()
// esse é o processo de pegar a hora do sistema que tiver usando, do servidor ou do computador

console.log(`Agora são ${hora} horas, então tenha`)
if (hora >= 0 && hora <= 5) {
    console.log("Uma Boa Madrugada")
} else if (hora <= 12) {
    console.log("Um Bom dia")
} else if (hora <= 18){
    console.log("Uma Boa Tarde")
} else {
    console.log("Uma Boa Noite")
}