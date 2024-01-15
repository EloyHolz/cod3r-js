// obejeto para js é a junção de uma chave( = identificador unico) com um valor
// é diferente de Json -> esse pé um formato textual para trocar dados entre sistemas (texto)
//obj = anotação literal de um objeto (atributo)

const prod1 = {}
prod1.nome /*é a chave*/ = "Celular Ultra Super Mega" /*é o valor*/
prod1.valor = 10000
prod1 ['Desconto de Black Friday'] = 99.90 // evitar usar atributos assim pq fica feio dms
console.log(prod1)


// pode criar no proprio objeto
const prod2 = {
    nome: "Camisa Polo",
    valor: 100,
    desconto: 5,
    total: 95.
}

console.log(prod2)