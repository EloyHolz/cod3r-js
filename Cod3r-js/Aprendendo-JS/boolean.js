isAtivo = false
console.log(isAtivo)

isAtivo = true   
console.log(isAtivo)

isAtivo = 1
// ! serve para afirmar a negação
console.log(!!isAtivo)
console.log(!isAtivo)

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os Falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("para finalizar...")
console.log(!!('' || null || 0 || ""))

let  nome = ''
// Ele vai escrever o que for verdadeiro -> caso nao tenha nada no nome, siginifica que é falso, logo escreveria a outra opção (|| = ou)
console.log(nome || "Desconhecido")