{   var quantidade = 10;
    var preco = 4
    var imposto = 9.5
    var desc = 6.5
    var pf = (preco + imposto - desc) * quantidade
    var nome = "Caneta"; }


console.log(nome);
console.log(quantidade);
console.log(desc); 
console.log(imposto); 
console.log(preco); 
console.log(pf); 


// forma + moderna = usar let ( tem diferença entre a var)

let valor = 19.90;
let promo = 0.4; 

console.log ("batata do dia =" , (valor * promo) , "R$");


// Tipos de dados aceitaveis em JS (principais )
    // Valores inteiros e com casas decimais = number 
    // V ou F = boolean 
    // Sequencia de caracteres entre "" = string 

let idade = 31;
let sal = 4.500;
let chuva = true
let comida = "Lasanha"
console.log((typeof idade), (typeof sal), (typeof chuva), (typeof comida)); 


var escola = "Cod3r"
console.log(escola);