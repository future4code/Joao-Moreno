//Exercícios de interpretação de código

//Exercicio Nº1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//1A) Explique o que o código faz. Qual o teste que ele realiza? 
//Resposta-1A) O codigo pede um numero ao  usuario e realiza uma operacao de divisao por 2 com intuido de utilizar o resto 
//1B) Para que tipos de números ele imprime no console "Passou no teste"?
//Resposta-1B) Para os Numeros Par
//1C) Para que tipos de números a mensagem é "Não passou no teste"?
//Resoista-1C) Para os Numeros Impar

//Exercicio Nº2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//    // break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//2A) Para que serve o código acima?
//Resoista-2A) Consulta de Valor da fruta escolhida pelo cliente
//2B) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//Resposta-2B) O preço da fruta Maçã é 2.25
//2C) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//Resposta-2C) O preço da fruta  Pêra  é  R$ 5. (sem o break ele vai direto para o default)

//Exercicio Nº3

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//3A) O que a primeira linha está fazendo?
//Resposta-3A) A primeira linha do codigo esta pedindo para o usuario  digitar o primeiro numero
//3B) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Resposta-3B) valor 10 = "Esse numero passou no teste" valor -10 = vai dar erro devido a mensagem
//3C) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Resposta-3C) Sim a mensagem nao sera impressa no console pois nao tem uma condição caso o numero seja diferente de > 0, o console log nao consegue acessar a variavel mensagem pois esta em um escopo diferente 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercícios de escrita de código

//Exercicio Nº1

// const idadeUsuario = Number(prompt(`Quantos anos você tem ?`))
// const maiorIdade = 18

// function podeDirigir(idadeUsuario, maiorIdade ) {

//     if(idadeUsuario >= maiorIdade){
//         console.log("Parabens você pode Dirigir, Mete MARCHAA")
//     }else{
//         console.log("Ainda nao esta no Tempo")
//     }
    
// }

// podeDirigir(idadeUsuario, maiorIdade)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercicio Nº2

// const periodoEstudo = prompt(`Digite o periodo do seu Turno: M (matutino) ou V (Vespertino) ou N (Noturno)`).toUpperCase()

// function mensagem(periodoEstudo) {
//     if(periodoEstudo === "M"){
//         console.log(`Bom Dia Menó`)
//     }else if(periodoEstudo === "V") {
//         console.log(`Boa Tarde Menó`)
//     }else{
//          console.log("Boa Noite Menó")  }
// }
// mensagem(periodoEstudo)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercicio Nº3

// const periodoEstudo = prompt(`Digite o periodo do seu Turno: M (matutino) ou V (Vespertino) ou N (Noturno)`).toUpperCase()

// switch(periodoEstudo){
//     case "M":
//     console.log("Bom Dia Menó")
//     break
//     case "V":
//     console.log("Boa Tarde Menó")
//     break
//     case "N":
//     console.log("Boa Noite Menó")
//     break
//     default:
//         console.log(`Insira um Periodo Valido: M, V ou N`)

// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercicio Nº4

// const selecaoFilme = prompt("Digite o Genero do filme: Fantasia, Coemdia, Terror ").toUpperCase()
// const valorIngresso = Number(prompt("Qual o valor do Ingresso"))

// function verificador(selecaoFilme, valorIngresso) {
//     if(selecaoFilme === "FANTASIA" && valorIngresso <= 15){
//     console.log(`Bom Filme Rapaziada!`)}
//     else{ 
//         console.log(`Selecione outro Filme =(`)}
    
// }

// verificador(selecaoFilme, valorIngresso)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////