//Exercicios de escrita de codigo 

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//1-A)O que o código abaixo está fazendo? Qual o resultado impresso no console?
//Resposta da 1-A) Somar todos os numeros de 0 a 4, O resultado impresso no console é 10

//Exercicio Nº2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

//2-A) O que vai ser impresso no console?
//Resposta 2-A) Sera impresso os numeros maiores que 18 (19, 21, 23, 25, 27, 30)
//2-B) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
//Resposta 2-B)

//Exercicio Nº3

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//3-A)Qual seria o resultado impresso no console, se o usuário digitasse o número
//Resposta 3-A)Sera impresso no console 4 linhas e o numero de * correspondente a cada linha 
///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercicios de Escrita de Codigo

//Exercicios Nº1

// const numeroDePets = Number(prompt("Quantos pets você tem?"))
// if (numeroDePets <= 0){
//     console.log("Que pena, Você pode adotar um Pet!! corre lá")
// } 
// const pets = []
// for (i = 0; i < numeroDePets; i++){
//     pets.push(prompt("Digite um nome dos seus Pets"))
// }
// console.log (pets)



//Exercicios Nº2

// let arrayOriginal = [0, 10, 20, 30, 40, 50]

// for (i = 0; i < arrayOriginal.length; i++){
//   console.log(arrayOriginal[i])}

//   for (let numero of arrayOriginal){
//     console.log(numero / 10)
//   }

// const arrayPar = []
//   for(let numero of arrayOriginal){
//     if( numero % 2 === 0){
//       arrayPar.push(numero)
//     }  
//   }
//   console.log(arrayPar)

// const arrayString = []

// for(let i = 0; i < arrayOriginal.length; i++){

//   arrayString.push(`O elemento do indice ${i} é ${arrayOriginal[i]}`)

// }
// console.log(arrayString)

// function  descobrirMenoreMaior (array){
// let maior = 0
// let menor = 0
// for (let i=0; i< arrayOriginal.length; i++){
//   if(array[i] > maior)
//   maior = array[i]
//   if(array[i] < menor)
//   menor = array[1]
// }
// console.log(`O Menor Valor é ${menor}`)
// console.log(`O Maior Valor é ${maior}`)

// }
// descobrirMenoreMaior(arrayOriginal)




