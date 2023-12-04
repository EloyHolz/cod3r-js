var idade = 19
console.log (`Você tem ${idade} anos`)

//Tipo 1 
// if (idade < 16 ) {
//     console.log ("Não Pode votar")
// } else {
//     if (idade >= 16 &&  idade < 18){
//         console.log ("Voto é Opicional")
//     } else{
//         console.log ('Voto obrigatório')
//     }
// }

//Tipo 2

// if (idade < 16 ){
//     console.log("Não pode votar")
// } else if(idade < 18) {
//     console.log("Seu Voto é opcional")
// } else if (idade >= 18 && idade <= 63) {
//     console.log("Voce já pode votar")
// } else {
//     console.log("Seu voto é opcional novamente")
// }


//Tipo 3
if (idade < 16) {
    console.log("Logo você não pode votar")
} else if (idade <18 || idade >63){
    console.log("Logo, seu voto é facultativo")
} else {
    console.log("Logo seu voto é obrigatório")
}