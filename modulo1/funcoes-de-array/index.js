//Exercicios de Interpretação de Codigo

//Exercicios Nº1

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//1A) O que vai ser impresso no console?
//Resposta 1A)
//sera imprimido no console os seguintes objetos
//{ nome: "Amanda Rangel", apelido: "Mandi" } 0
//{ nome: "Laís Petra", apelido: "Laura" } 1
//{ nome: "Letícia Chijo", apelido: "Chijo" } 2

//Exercicio Nº2

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

//2A) O que vai ser impresso no console?
//Resoista 2A)
//(3)['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

//Exercicio Nº3

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

//3A) Oque vai ser impresso no console?
//Resposta 3A) sera impresso no console
//0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
//1: {nome: 'Laís Petra', apelido: 'Laura'}

//////////////////////////////////////////////////////////////////////////////////////

//Exercicios de Escrita de Codigo

//Exercicio Nº1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //1A) Crie um novo array que contenha apenas o nome dos doguinhos

const novoArrayPets = pets.map((item) => {
      return item.nome
   })
console.log(novoArrayPets)


//1B) Crie um novo array apenas com os cachorros salsicha

const novoArrayRaca = pets.filter((item) => {
    return item.raca == "Salsicha"
})
console.log(novoArrayRaca)

//1C) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.

const novoArrayMensagem = (cachorro) => {
    if (cachorro.raca === "Poodle") {
        return `Parabens, Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorro.nome}!`
    }

}
const desconto = pets.filter(novoArrayMensagem).map(novoArrayMensagem)

console.log(desconto)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercicio Nº2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 
 //2A)Crie um novo array que contenha apenas o nome de cada item
 const novoArraySoNomes = produtos.map((item) => {
       return item.nome
    })
 console.log(novoArraySoNomes)
 //2B)Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
 const precosProdutos = produtos.map((item) => {
     return item.nome + " | " + item.preco*0.95
     })
 console.log(precosProdutos)
 //2C) Crie um novo array que contenha apenas os objetos da categoria Bebidas
 const novoArraySoBebidas = produtos.filter((item) => {
     return item.categoria == "Bebidas"
 })
 console.log(novoArraySoBebidas)
 
 //2D) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê
 const novoArraySoYpe = produtos.filter((item) => {
     return item.nome.includes("Ypê")
 })
 console.log(novoArraySoYpe)
 
 //2E)Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
 const mostrarSoYpe = (item) => {
     return item.nome.includes("Ypê")
 }
 
 const mostrarFraseSoYpe = (item) => {
     return `Compre ${item.nome} por ${item.preco}`
 }
 const fraseYpe = produtos.filter
 
 const frase = produtos.filter(mostrarSoYpe).map(mostrarFraseSoYpe)
 console.log(frase)