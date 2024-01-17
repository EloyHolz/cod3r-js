// Funções sao basilares para o JS!

console.log (typeof Object)

class Produto{}
console.log (typeof Produto)

// Conceito de Função -> é uma ação que executa um bloco delimitado por chaves, que vc  pode reutilizar a qualquer momento, desde que chame a função

// Função sem retorno
function imprimirSoma(a,b) {
    console.log (a + b)
}

imprimirSoma (2,3)
imprimirSoma ("casa", "zarão")
imprimirSoma (2, 4 ,5 ,6 ,7, 8, 9, 10)

// Função com retorno

function soma(a, b = 1) {
    return a + b 
}

console.log (soma (2,3))
console.log (soma ("casa", "amora"))
console.log (soma(2))

// Armazenado uma função em uma variável

const somando = function (a,b){
    console.log (a+b)    
}
somando (4,6)

// Armazenando uma funçao Arrow em uma variável
// => subistitui o nome function -> tem o mesmo efeito, mas reduz a sintaxe

const Soma = (a, b) => {
    return a + a + b
}
console.log (Soma (5, 4))

/* Retorno Implicito -> reduz ainda mais a sintaxe, retirando a necessidade de escrever o return -> joga a ação da função apos o arrow -> ATENÇÂO -> apenas usa quando essa função for executar apenas uma unica linha de codigo*/

const subtração = (a,b) => a-b
console.log (subtração (100, 1))
// se tiver apenas um indeicador na funcção (a ou b) nao precisa colocar o ( ) quando fizer uma arrow function