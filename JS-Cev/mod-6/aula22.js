let num = [5 , 8, 4, 9, 3]
num[5] = 7
num.push (2)
num.sort()

console.log (`Nosso vetor é o ${num}`)
console.log (`O vetor tem ${num.length} elementos`)
console.log (`O primeiro elemento desse vetor é ${num[0]}`)

let x  = num.indexOf(10)
if (x == -1){
    console.log ('Valor nao encontrado')
} else {
    console.log (`O valor esta na posição ${x}`)
}

for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
/*
console.log (num.indexOf(4))
console.log (num.indexOf(10))

for(let pos = 0; pos < num.length ; pos++){
    console.log (`A Posição ${pos} tem o valor ${num[pos]}`)
}

para adicionar um espaço na variavel -> lembra q começa no 0 ( ultima casa + 1)
para colocar se, saber a posição .push( )
para saber quantos elemtos tem uma variavel .length -> sem parenteses
para colocar em ordem crescente -> .sort()
para encontrar a posição do valor x dentro do vetor -> .indexOf(x) 
    caso nao tenha o x -> vai voltar -1

Lembrando -> A ordem dos elementos importa

Para fazer aparecer os elementos existem duas formas
    - uma bruta:

        console.log(num[0])
        console.log(num[1])
        console.log(num[2])
        console.log(num[3])
    - uma inteligente usando repetições:

        for (let p = 0; p <n.length; p++){
            console.log(num[p])
        }
    - uma versão super inteligente (for + in) ( in = dentro)

        for (let pos (apenas o nome do indice (variavel do for)) in num (nome da varuiavel compsota)[Para cada pos em num, mostre o num[pos]]){
            console.log (num[pos])
        }
*/