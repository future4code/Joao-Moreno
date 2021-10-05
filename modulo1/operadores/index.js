//Atividade-Operadores

//Exercicios de Interpretação de Codigo
//
//1) Resultados
//1-a)False 
//1-b)False
//1-c)True
//1-d)Boleana

//Exercicio Nº2
//
//2) Resultados
//R:Faltou a Identificação da Variavel para ser reconhecida como Numero, Nesse Caso sera impresso a juntação (apenas ao lado) do primeiroNumero, EX:1ºN=5 2ºN=5  sera impresso 55

//Exercicio Nº3
//
//3)Resultado
//R:No caso do exemplo do meu colega citado no Exercicio anterio basta ele adicionar o Number() antes das variaveis primeiroNumero e segundoNumero

/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero) 

console.log(soma)
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//Exercícios de escrita de código
//
//Exercicio Nº1

/*let suaIdade = prompt("Qual sua idade ?")
let amigoIdade = prompt("Qual a idade do seu amigo ?")

let resultado = suaIdade >= amigoIdade

console.log("Qual o sua Idade ?")
console.log("R:", suaIdade)
console.log("Qual a idade do seu amigo ?")
console.log("R:", amigoIdade)
console.log("Sua idade é maior do que a do seu melhor amigo?", resultado )
console.log("A diferença de idade entre vocês é de", suaIdade - amigoIdade)
*/


//Exercicio Nº2

//let numeroPar = prompt("Insira um numero Par")
//console.log(numeroPar % 2)
//R: Quando inserimos um numero par o resto dele é 0
//R: Quando inserimos um numero impar o resto dele é 1


//Exercicio Nº3

/*let idadeanos = prompt("Quantos anos você tem ?")

resultadomesses = idadeanos * 12

resultadodias = idadeanos * 365

resultadohoras = resultadodias * 24

console.log("Você tem", idadeanos, "anos")
console.log("Que é equivalente a", resultadomesses, "Messes")
console.log("Que é equivalente a", resultadodias, "Dias")
console.log("Que é equivalente a", resultadohoras, "Horas")
*/


//Exercicio Nº4

let primeiroNumero = prompt("Digite um Numero")
let segundoNumero = prompt("Digite o Segundo Numero")

let resultadoum = Number (primeiroNumero) > Number (segundoNumero)
let resultadodois = Number (primeiroNumero) === Number(segundoNumero)
let resultadotres = Number(primeiroNumero) % Number(segundoNumero) === 0
let resultadoquatro = Number(segundoNumero) % Number(primeiroNumero) === 0



console.log("Primeira escolha:", primeiroNumero)
console.log("Segunda escolha:", segundoNumero)
console.log("O primeiro numero é maior que segundo?", resultadoum)
console.log("O primeiro numero é igual ao segundo?", resultadodois)
console.log("O primeiro numero é divisível pelo segundo?", resultadotres)
console.log("O segundo numero é divisível pelo primeiro?", resultadoquatro)