//Exercícios de interpretação de código

//Exercicio Nº1

//const filme = {
//	nome: "Auto da Compadecida", 
//	ano: 2000, 
//	elenco: [
//		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
//		"Virginia Cavendish"
//		], 
//	transmissoesHoje: [
//		{canal: "Telecine", horario: "21h"}, 
//		{canal: "Canal Brasil", horario: "19h"}, 
//		{canal: "Globo", horario: "14h"}
//		]
//}
//
//console.log(filme.elenco[0])
//console.log(filme.elenco[filme.elenco.length - 1])
//console.log(filme.transmissoesHoje[2])

//A) O que vai ser impresso no console?
//Resposta-A) Vai ser impresso no console: 
//Matheus Nachtergaele
//Virginia Cavendish
//canal: Globo, horario: 14h 

//Exercicios Nº2

//const cachorro = {
//	nome: "Juca", 
//	idade: 3, 
//	raca: "SRD"
//}
//
//const gato = {...cachorro, nome: "Juba"}
//
//const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
//
//console.log(cachorro)
//console.log(gato)
//console.log(tartaruga)

//A) O que vai ser impresso no console?
//Resposta-A) Sera impresso no console 3 Objetos
//{nome:Juca, idade:3, raca:SRD,}
//nome:Juca
//idade:3
//raca:SRD
// e o prototype Object
//{nome:Juba, idade:3, raca:SRD,}
//nome:Juba
//idade:3
//raca:SRD
// e o prototype Object
//{nome:Jubo, idade:3, raca:SRD,}
//nome:Jubo
//idade:3
//raca:SRD
// e o prototype Object

//B) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//Resposta-B) A Sintaxe (...) é chamada de espalhamento (ou spread) serve para cópiar um objeto (ou array) inteiro

//Exercicio Nº3

//function minhaFuncao(objeto, propriedade) {
//	return objeto[propriedade]
//}
//
//const pessoa = {
//  nome: "Caio", 
//  idade: 23, 
// backender: false
//}
//
//console.log(minhaFuncao(pessoa, "backender"))
//console.log(minhaFuncao(pessoa, "altura"))

//A) O que vai ser impresso no console?
//Resposta-A) Sera Impresso no Console:
//False
//Undefined (altura nao foi declarada)

//B)Explique o valor impresso no console. Você sabe por que isso aconteceu?
//Resposta-B) 
//False pois foi uma informação declarada na const pessoa
//Undefined Pois a "altura" nao foi Declarada

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercícios de escrita de código

//Exercicio Nº1

//Resposta-A)
//    const pessoa = {
//    nome: "Joao", 
//    apelidos: ["joaozinho", "jao", "jhonny"]
//}
//    function chamarPessoa(pessoa) {
//    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)        
//    }
//Resposta-B)
//    const novaPessoa = {...pessoa, apelidos: ["sean", "seanty", "drude"]
//
//}
//    chamarPessoa(novaPessoa)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercicio Nº2

//Resposta-A)
//    const obj1 = {
//    nome: "joao",
//    idade: 24,
//    profissao: "estudante"
//}
//    const obj2 = {
//    nome: "Sean",
//    idade: 25,
//    profissao: "Dev Web FullStack"
//}
//Resposta-B)
//function imprimirObjts(objetos){
//
//    return [`${objetos.nome}, ${objetos.nome.length}, ${objetos.idade}, ${objetos.profissao}, ${objetos.profissao.length}`] 
//}
//
//console.log(imprimirObjts(obj1))
//console.log(imprimirObjts(obj2))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercicio Nº3

//Resposta-A)
//const carrinho = []
//Resposta-B)
//const melancia = {
//    nome: "melancia",
//    disponibilidade: true
//}
//const morango = {
//    nome: "morango",
//    disponibilidade: true
//}
//const melao = {
//    nome: "melao",
//    disponibilidade: true
//}
//Resposta-C)
//function receberFruta(fruta) {
//
//    const addCarinho = carrinho.push(fruta)   
//}
//receberFruta(melancia)
//receberFruta(morango)
//receberFruta(melao)
//console.log(carrinho)

////////////////////////////////////////////////////////////////////////////////
//Desafio 2


//const filme1 = {
//nome:"Eu sou a lenda",
//anoLancamento1: 2007
//}
//
//const filme2 = {
//nome:"Lucy",    
//anoLancamento2: 2014
//}
//
//function desafio2(filmes1, filmes2) {
//
//    const comparacao1 = filmes1.anoLancamento1 < filmes2.anoLancamento2
//    const comparacao2 = filmes1.anoLancamento1 === filmes2.anoLancamento2
//    return `O primeiro filme foi lançado antes do segundo? ${comparacao1}
//  O primeiro filme foi lançado no mesmo ano do segundo? ${comparacao2}`
//    
//}
//
//console.log(desafio2(filme1, filme2))