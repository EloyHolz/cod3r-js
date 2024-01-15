const valores = [7.7, 8.9, 6.3, 9.2]
// começa do 0
console.log (valores[0], valores[3])
console.log (valores[4])
// por nao existir, o JS mostra como indefinido

valores [4] = 99
console.log (valores)
console.log (valores[4])

// para saber a q2uantidade de elçementos num arrey usa o length
console.log (valores.length)

// para adicionar novos elementos ao arrey = usa o .push -> adicionará a proxima opção
valores.push(100)
console.log (valores)

// para retirar o ultimo elemento do arrey, independete da posição = usa o .pop ou  delete variavel [numero]
console.log(valores.pop())
delete valores[2 ]
console.log(valores)

console.log(typeof valores)