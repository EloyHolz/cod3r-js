let amigo = {nome: 'José',
 sexo: 'M', 
 peso: 88.4,
 engordar(p=0){
    this.peso += p
    console.log ('Engordou')
 }}

amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)