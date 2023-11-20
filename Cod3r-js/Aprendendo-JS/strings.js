const escola = "Cod3r"

console.log(escola.charAt(0))
console.log(escola.charAt(1))
console.log(escola.charAt(2))
console.log(escola.charAt(3))
console.log(escola.charAt(4))
console.log(escola.charAt(5))

// Para saber o indice associado ao caractere do Unicode
console.log(escola.charCodeAt(3)) 

// Função bastante usada para falar o que vem apos o indice selecionado - substring
console.log(escola.substring (1))
// va do 0 ate o indice final (o 3) sem mostar o 3
console.log(escola.substring(0, 3))

// Pode concatenar - juntar com outras palavras
console.log('Escola '.concat(escola).concat("!"))

// replace - troca um caractere por outro
console.log(escola.replace(3,"e"))

// Para separar uma string em um arei - > separar 1 grande elemento em 3 mini elementos, nesse caso separados pela ","
console.log("Ana,Maria,Pedro".split(","))

// Template String _ teve ser aberto com o simbolo da crase_pode quebrar linha
const nome = "Rebecca"
const concat = "Olá " + nome + "!"
const Template = `
    Olá 
    ${nome}!`
console.log(concat, Template)