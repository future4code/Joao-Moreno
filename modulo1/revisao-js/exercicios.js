// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}
retornaArrayInvertido(array)

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}
retornaArrayInvertido(array)

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort((a, b) => (a - b))
    return array
}
retornaArrayOrdenado(array)

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPares = array.filter(pares => (pares % 2) === 0)  
  return numerosPares 
}

retornaNumerosPares(array)

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayPar = []
    let i = 0
    while (i < array.length) {
        if(array[i] % 2 === 0){
            let numeroPar = array[i]
            arrayPar.push(numeroPar * numeroPar)
        }
        i++
    }
    return arrayPar
}
retornaNumerosParesElevadosADois(array)

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let i = 0
    let maior = -Infinity
    while (i < array.length){
    if(array[i] > maior){
      maior = array[i]
    }
    i++
}
return maior
}
retornaMaiorNumero(array)

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if(num1 > num2){
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }
    let maiorDivisivelPorMenor = maiorNumero%menorNumero === 0 
    let diferenca = maiorNumero - menorNumero
    return { maiorNumero, maiorDivisivelPorMenor, diferenca}
    }

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let i = 0 
    const array = []
    let par = 0
    while(i < n ){
        array.push(par)
        par = par + 2
        i++
    }
    return array
 }
 console.log(retornaNPrimeirosPares(n))

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  
    if(ladoA< (ladoB+ladoC) && ladoB < (ladoA+ladoC) && ladoC < (ladoA+ladoB)){
        if(ladoA == ladoB && ladoB == ladoC){
        return "Equilátero"
        } else if ((ladoA == ladoB  || ladoA == ladoC || ladoC == ladoB)){
         return "Isósceles"
        }else{
        return "Escaleno"
    }
    }
    }
    classificaTriangulo(ladoA, ladoB, ladoC)
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
     const arrayOrdenado = array.sort((a, b) => a -b);

     const segundoMaiorValor = arrayOrdenado[arrayOrdenado.length -2];
     const segundoMenorValor = arrayOrdenado[1];
     const arrayResultado = [segundoMaiorValor, segundoMenorValor];
  return arrayResultado
}
retornaSegundoMaiorESegundoMenor(array)
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}  

retornaChamadaDeFilme(array)

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novaPessoa = {
   ...pessoa,
   nome:`ANÔNIMO`
   }
   return novaPessoa
}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasPermitidas = pessoas.filter((pessoas) =>{
        return pessoas.altura>=1.5 && pessoas.idade>14 && pessoas.idade<60
    })
     return pessoasPermitidas
 }

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoPermitidas = pessoas.filter((pessoas) =>{
        return pessoas.altura<1.5 || pessoas.idade<=14 || pessoas.idade>60
    })
     return pessoasNaoPermitidas
 }

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
return contas.map((conta) => {
     let soma = conta.compras.reduce((acc,cur) => acc+ cur , 0);
     let saldo = conta.saldoTotal
     return {...conta, saldoTotal: saldo - soma, compras: []}
})

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   return consultas.sort((primeira, segunda)=>{
       return new Date(primeira.dataDaConsulta.split("/").reverse()).getTime() - new Date (segunda.dataDaConsulta.split("/").reverse()).getTime()
   })

}
