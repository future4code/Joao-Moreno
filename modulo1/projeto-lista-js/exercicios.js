// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calcularRetangulo() {
   const altura = prompt("Digite a Altura do Retangulo:")
    const largura = prompt("digite a Largura do Retangulo:")
  
  console.log( altura * largura)
  
  }

 

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o Ano Atual"))
  const anoNascimento = Number(prompt("Digite o Ano de Nascimento"))
  
  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const result1 = peso / (altura * altura)
  return result1
 }
 console.log(calculaIMC(85, 1.8))

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt(`Digite seu Nome:`)
  const idadeUsuario = prompt(`Digite sua Idade:`)
  const emailUsuario = prompt(`Digite seu Email:`)
 
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
   

 }
 console.log(imprimeInformacoesUsuario())

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
 
  const listaCor = []

  const primeiraCor = prompt("Digite uma Cor")
  const segundaCor = prompt("Digite uma segunda Cor")
  const terceiraCor = prompt("Digite uma terceira Cor")
  listaCor.push(primeiraCor)
  listaCor.push(segundaCor)
  listaCor.push(terceiraCor)

 console.log(listaCor) 
}
console.log(imprimeTresCoresFavoritas())

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const editarString = string.toUpperCase()
  return editarString
}
console.log(retornaStringEmMaiuscula(`Estou Conseguindo fazer tudo`))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const operacao1 = custo / valorIngresso
  return operacao1
}
console.log(calculaIngressosEspetaculo(5000, 100))

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanhoString1 = string1.length
  const tamanhoString2 = string2.length
  const operacaoString = tamanhoString1 === tamanhoString2
  return operacaoString

}
//console.log(checaStringsMesmoTamanho("joao","joao"))

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  let primeiraCasa = array[0]
  
  return primeiraCasa

}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let primeiraCasa = array[array.length - 1]
  
  return primeiraCasa

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiraCasa = array[0]
  let segundaCasa = array[array.length -1]
  array[0] = segundaCasa
  array[array.length - 1] = primeiraCasa
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const ultima = string1.toUpperCase() === string2.toUpperCase()
  return ultima
}
console.log(ultima)







// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}