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

/*
Instancia, classe e objeto
     a finalidade da instância em JavaScript é criar objetos únicos com base em um modelo (ou classe) =  A instância entra aqui para ajudar a criar personagens únicos a partir de um modelo geral.

     Modelo (Classe): Imagine que a classe é como o plano para fazer carros. Ela define o que todos os carros devem ter, como a marca e o modelo.

        Instância: Agora, a instância é como um carro real que foi feito seguindo esse plano. Digamos que você tenha muitos carros diferentes, cada um com uma marca e modelo específicos, mas todos construídos a partir da mesma ideia geral.

        Essa abordagem é útil porque, em vez de reescrever o código para cada carro individualmente, você pode usar a classe como um modelo e criar quantas instâncias (carros) únicas você precisar.

        Então, a finalidade da instância é permitir que você crie objetos com características específicas, mas seguindo as diretrizes definidas na classe, economizando tempo e facilitando a organização do código. Isso é especialmente útil quando você está lidando com muitos itens semelhantes, como personagens em um jogo, ou, no caso de um advogado digital, talvez diferentes tipos de contratos ou documentos.
*/ 
// Definindo uma classe chamada Carro
class Carro {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    exibirInfo() {
      console.log(`Carro: ${this.marca} ${this.modelo}`);
    }
  }
  
  // Instanciando um objeto da classe Carro
  const meuCarro = new Carro("Toyota", "Corolla");
  
  // Chamando o método da instância
  meuCarro.exibirInfo();

// Aprendendo sobre Notação ponto -> serve para acessar propriedades, chamar ou acessar de um objeto
console.log(Math.ceil(6.2))

const obj1 = {}
obj1.nome = "Bola"
obj1['idade'] = '56 anos'
console.log(obj1.nome)
console.log(obj1.idade)