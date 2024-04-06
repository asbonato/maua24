// // // // // // // // // // // // // // // // // // // // // // // //declarando constantes
// // // // // // // // // // // // // // // // // // // // // // // const nome = "José"
// // // // // // // // // // // // // // // // // // // // // // // const idade = 27
// // // // // // // // // // // // // // // // // // // // // // // console.log(nome, idade)
// // // // // // // // // // // // // // // // // // // // // // // //aspas podem ser simples ou duplas
// // // // // // // // // // // // // // // // // // // // // // // const sexo = "M"
// // // // // // // // // // // // // // // // // // // // // // // const endereco = 'Rua K, 12'
// // // // // // // // // // // // // // // // // // // // // // // const endereco1 = "Rua Olho D'Agua, 12"
// // // // // // // // // // // // // // // // // // // // // // // console.log(sexo, endereco, endereco1)
// // // // // // // // // // // // // // // // // // // // // // // //declarando variáveis
// // // // // // // // // // // // // // // // // // // // // // // //let: variável local com escopo de bloco
// // // // // // // // // // // // // // // // // // // // // // // let a = 2
// // // // // // // // // // // // // // // // // // // // // // // let b = 'abc'
// // // // // // // // // // // // // // // // // // // // // // // console.log(a, b)
// // // // // // // // // // // // // // // // // // // // // // // //var: seu escopo é a função em que foi declarada ou é global
// // // // // // // // // // // // // // // // // // // // // // // var c = 2 + 3;
// // // // // // // // // // // // // // // // // // // // // // // var d = "abcd"
// // // // // // // // // // // // // // // // // // // // // // // console.log(c, d)

// // // // // // // // // // // // // // // // // // // // // // var linguagem = "Javascript"
// // // // // // // // // // // // // // // // // // // // // // console.log("Aprendedo " + linguagem)
// // // // // // // // // // // // // // // // // // // // // // //pode ser redeclarada
// // // // // // // // // // // // // // // // // // // // // // var linguagem = "Java"
// // // // // // // // // // // // // // // // // // // // // // console.log("Aprendedo " + linguagem)

// // // // // // // // // // // // // // // // // // // // // // var idade = 18
// // // // // // // // // // // // // // // // // // // // // // //exibe undefined, ou seja, a variável já existe aqui,
// // // // // // // // // // // // // // // // // // // // // // //só não teve valor atribuído; ela é içada, do inglês hoist,
// // // // // // // // // // // // // // // // // // // // // // //para fora do bloco
// // // // // // // // // // // // // // // // // // // // // // console.log(`Oi, ${nome}`)
// // // // // // // // // // // // // // // // // // // // // // if (idade >= 18){
// // // // // // // // // // // // // // // // // // // // // //     var nome = "João"
// // // // // // // // // // // // // // // // // // // // // //     console.log(`Parabéns, ${nome}. Você pode dirigir.`)
// // // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // // //ainda existe aqui
// // // // // // // // // // // // // // // // // // // // // // console.log(`Até mais, ${nome}`)

// // // // // // // // // // // // // // // // // // // // // const n1 = 2
// // // // // // // // // // // // // // // // // // // // // const n2 = '3'
// // // // // // // // // // // // // // // // // // // // // //coerção implícita - concatenação acontece
// // // // // // // // // // // // // // // // // // // // // const n3 = n1 + n2
// // // // // // // // // // // // // // // // // // // // // console.log(n3)
// // // // // // // // // // // // // // // // // // // // // //coerção explícita - soma acontece
// // // // // // // // // // // // // // // // // // // // // const n4 = n1 + Number(n2)
// // // // // // // // // // // // // // // // // // // // // console.log(n4)

// // // // // // // // // // // // // // // // // // // // console.log(1 == 1)
// // // // // // // // // // // // // // // // // // // // console.log(1 == '1')
// // // // // // // // // // // // // // // // // // // // console.log(1 === 1)
// // // // // // // // // // // // // // // // // // // // console.log(1 === '1')
// // // // // // // // // // // // // // // // // // // // console.log(true == 1)
// // // // // // // // // // // // // // // // // // // // console.log(false == 0)
// // // // // // // // // // // // // // // // // // // // console.log(true + true)
// // // // // // // // // // // // // // // // // // // // console.log(true == 2)
// // // // // // // // // // // // // // // // // // // // console.log(false == -1)
// // // // // // // // // // // // // // // // // // // // console.log(1 == [1])
// // // // // // // // // // // // // // // // // // // // console.log(null == null)
// // // // // // // // // // // // // // // // // // // // console.log(null == undefined)
// // // // // // // // // // // // // // // // // // // // console.log([] == false)
// // // // // // // // // // // // // // // // // // // // console.log([] == [])

// // // // // // // // // // // // // // // // // // // //declaração
// // // // // // // // // // // // // // // // // // // v1 = []
// // // // // // // // // // // // // // // // // // // //podemos acessar qq posição, começando em 0
// // // // // // // // // // // // // // // // // // // v1[0] = 3.4
// // // // // // // // // // // // // // // // // // // v1[10] = 2
// // // // // // // // // // // // // // // // // // // v1[2] = 'abc'
// // // // // // // // // // // // // // // // // // // console.log(v1.length)
// // // // // // // // // // // // // // // // // // // //inicializar na declaração
// // // // // // // // // // // // // // // // // // // v2 = [2, "abc", true]
// // // // // // // // // // // // // // // // // // // console.log(v2)
// // // // // // // // // // // // // // // // // // // //iterando
// // // // // // // // // // // // // // // // // // // for (let i = 0; i < v2.length; i++) {
// // // // // // // // // // // // // // // // // // //     console.log(v2[i])
// // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // const v3 = []
// // // // // // // // // // // // // // // // // // v3[1] = 10
// // // // // // // // // // // // // // // // // // //v3 = [1,2]
// // // // // // // // // // // // // // // // // const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]
// // // // // // // // // // // // // // // // // const apenasComA = nomes.filter((n) => n.startsWith("A"))
// // // // // // // // // // // // // // // // // console.log(apenasComA)

// // // // // // // // // // // // // // // // // const res = nomes.map((nome) => nome.charAt(0))
// // // // // // // // // // // // // // // // // console.log(res)

// // // // // // // // // // // // // // // // // const todosComecamComA = nomes.every((n) => n.startsWith("A"))
// // // // // // // // // // // // // // // // // console.log(todosComecamComA)

// // // // // // // // // // // // // // // // // const valores = [1, 2, 3, 4]
// // // // // // // // // // // // // // // // // const soma = valores.reduce((ac, v) => ac + v)
// // // // // // // // // // // // // // // // // console.log(soma)

// // // // // // // // // // // // // // // // function hello() {
// // // // // // // // // // // // // // // //     console.log('Oi')
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // hello()
// // // // // // // // // // // // // // // // function hello(nome){
// // // // // // // // // // // // // // // //     console.log(`Hello, ${nome}`)
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // hello('Pedro')
// // // // // // // // // // // // // // // // function soma(a, b){
// // // // // // // // // // // // // // // //     return a + b
// // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // console.log(soma(2,3))

// // // // // // // // // // // // // // // // const dobro = function(n){
// // // // // // // // // // // // // // // //     return n * 2
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // console.log(dobro(2))

// // // // // // // // // // // // // // // // const triplo = function(n = 5){
// // // // // // // // // // // // // // // //     return n * 3
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // console.log(triplo())
// // // // // // // // // // // // // // // // console.log(triplo(10))

// // // // // // // // // // // // // // // const hello = () => console.log("Hello")
// // // // // // // // // // // // // // // hello()

// // // // // // // // // // // // // // // const dobro = (valor) => valor * 2
// // // // // // // // // // // // // // // console.log(dobro(10))

// // // // // // // // // // // // // // // const triplo = (valor) => {
// // // // // // // // // // // // // // //     return valor * 3
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // console.log(triplo(10))

// // // // // // // // // // // // // // // const ehPar = (n) => {
// // // // // // // // // // // // // // //     n % 2 == 0
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // console.log(ehPar(10))

// // // // // // // // // // // // // // let umaFuncao = function () {
// // // // // // // // // // // // // //     console.log("Fui armazenada em uma variável.")
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // //umaFuncao()

// // // // // // // // // // // // // // function f (funcao){
// // // // // // // // // // // // // //     funcao()
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // //f(umaFuncao)

// // // // // // // // // // // // // // function g(){
// // // // // // // // // // // // // //     function outraFuncao(){
// // // // // // // // // // // // // //         console.log("Fui criada por g")
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //     return outraFuncao
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // //g()()

// // // // // // // // // // // // // // // f(
// // // // // // // // // // // // // // //     function () {
// // // // // // // // // // // // // // //         console.log("Estou sendo passada para f")
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // )
// // // // // // // // // // // // // // // const gResult = g()
// // // // // // // // // // // // // // //gResult()
// // // // // // // // // // // // // // //g()()
// // // // // // // // // // // // // // //f(g()())
// // // // // // // // // // // // // // //f(1)

// // // // // // // // // // // // // function f() {
// // // // // // // // // // // // //     let nome = 'João'
// // // // // // // // // // // // //     function g() {
// // // // // // // // // // // // //         console.log(nome)
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //     g()
// // // // // // // // // // // // // }
// // // // // // // // // // // // // f()
// // // // // // // // // // // // function ola(){
// // // // // // // // // // // //     let nome = 'João'
// // // // // // // // // // // //     return function () {
// // // // // // // // // // // //         console.log('Olá, '+nome)
// // // // // // // // // // // //     }
// // // // // // // // // // // // }
// // // // // // // // // // // // let olaResult = ola()
// // // // // // // // // // // // //olaResult()

// // // // // // // // // // // // function saudacoesFactory(saudacao, nome){
// // // // // // // // // // // //     return function (){
// // // // // // // // // // // //         console.log(`${saudacao}, ${nome}`)
// // // // // // // // // // // //     }
// // // // // // // // // // // // }
// // // // // // // // // // // // let olaJoao = saudacoesFactory('Olá', 'João')
// // // // // // // // // // // // let tchauJoao = saudacoesFactory('Tchau', 'João')
// // // // // // // // // // // // olaJoao()
// // // // // // // // // // // // tchauJoao()

// // // // // // // // // // // function eAgora(){
// // // // // // // // // // //     let cont = 1
// // // // // // // // // // //     function f1(){
// // // // // // // // // // //         console.log(cont)
// // // // // // // // // // //     }
// // // // // // // // // // //     cont++
// // // // // // // // // // //     function f2(){
// // // // // // // // // // //         console.log(cont)
// // // // // // // // // // //     }
// // // // // // // // // // //     return {f1, f2}
// // // // // // // // // // // }
// // // // // // // // // // // let eAgoraResult = eAgora()

// // // // // // // // // // // eAgoraResult.f1()
// // // // // // // // // // // eAgoraResult.f2()

// // // // // // // // // // let pessoa = {
// // // // // // // // // //     nome: "João",
// // // // // // // // // //     idade: 17,
// // // // // // // // // // }
// // // // // // // // // // console.log("Me chamo " + pessoa.nome)
// // // // // // // // // // console.log("Tenho " + pessoa["idade"] + "anos")

// // // // // // // // // // let pessoaComEndereco = {
// // // // // // // // // //     nome: "Maria",
// // // // // // // // // //     idade: 21,
// // // // // // // // // //     endereco: {
// // // // // // // // // //         logradouro: "Rua B",
// // // // // // // // // //         numero: 121,
// // // // // // // // // //         bairro: 'Vila Nhocuné'
// // // // // // // // // //     },
// // // // // // // // // // }
// // // // // // // // // // console.log(`Sou ${pessoaComEndereco.nome}, tenho ${pessoaComEndereco.idade} anos e moro na ${pessoaComEndereco.endereco.logradouro}, número ${pessoaComEndereco["endereco"]["numero"]}, ${pessoaComEndereco["endereco"].bairro}`)
// // // // // // // // // let concessionaria = {
// // // // // // // // //     cnpj: "001.112.221/0001-45",
// // // // // // // // //     endereco: {
// // // // // // // // //         logradouro: "Rua A",
// // // // // // // // //         numero: 10,
// // // // // // // // //         bairro: "Vila J",
// // // // // // // // //     },
// // // // // // // // //     veiculos: [
// // // // // // // // //         {
// // // // // // // // //             marca: "Ford",
// // // // // // // // //             modelo: "Ecosport",
// // // // // // // // //             anoDeFabricacao: 2018,
// // // // // // // // //             quilometragem: 78.5,
// // // // // // // // //         },
// // // // // // // // //         {
// // // // // // // // //             marca: "Chevrolet",
// // // // // // // // //             modelo: "Onix",
// // // // // // // // //             anoDeFabricacao: 2020,
// // // // // // // // //             quilometragem: 118.0,
// // // // // // // // //         },
// // // // // // // // //         {
// // // // // // // // //             marca: "Volkswagen",
// // // // // // // // //             modelo: "Nivus",
// // // // // // // // //             anoDeFabricacao: 2020,
// // // // // // // // //             quilometragem: 18.77,
// // // // // // // // //         },
// // // // // // // // //     ],
// // // // // // // // // }

// // // // // // // // // for(let veiculo of concessionaria.veiculos){
// // // // // // // // //     console.log(`Marca: ${veiculo.marca}`)
// // // // // // // // //     console.log(`Modelo: ${veiculo.modelo}`)
// // // // // // // // //     console.log(`Ano de Fabricação ${veiculo.anoDeFabricacao}`)
// // // // // // // // //     console.log(`Km: ${veiculo.quilometragem}`)

// // // // // // // // // }
// // // // // // // // let calculadora = {
// // // // // // // //     soma: (a, b) => a + b,
// // // // // // // //     subtracao: function(a, b){
// // // // // // // //         return a - b
// // // // // // // //     }
// // // // // // // // }
// // // // // // // // //console.log(`2 + 3 = ${calculadora.soma(2, 3)}`)
// // // // // // // // //console.log(`2 - 3 = ${calculadora.subtracao(2, 3)}`)

// // // // // // // // let parcela1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // // // // // // // let parcela2 = [10, 9 , 8, 7, 6, 5, 4, 3, 2, 1]
// // // // // // // // let operacao = ["soma", "soma", "subtracao", "soma", "subtracao",
// // // // // // // // "soma", "soma", "subtracao", "soma", "subtracao"]

// // // // // // // // for(let i = 0; i < operacao.length; i++){
// // // // // // // //     console.log(calculadora[operacao[i]](parcela1[i], parcela2[i]))
// // // // // // // // }

// // // // // // // function demorada(){
// // // // // // //     const atualMais2Segundos = new Date().getTime() + 2000
// // // // // // //     while (new Date().getTime() <= atualMais2Segundos);
// // // // // // //     const d = 8 + 4
// // // // // // //     return d
// // // // // // // }
// // // // // // // const a = 2 + 3
// // // // // // // const b = 5 + 9
// // // // // // // setTimeout(function(){
// // // // // // //     const d = demorada()
// // // // // // //     console.log(d)
// // // // // // // }, 500)

// // // // // // // const e = 2 + a + b
// // // // // // // console.log(e)
// // // // // // function demorada(tempo){
// // // // // //     const atualMaisTempo = new Date().getTime() + tempo
// // // // // //     while(new Date().getTime() <= atualMaisTempo);
// // // // // //     console.log(`demorada ${tempo}`)
// // // // // //     const d = 8 + 4
// // // // // //     return d
// // // // // // }
// // // // // // setTimeout(function(){demorada(2000)}, 0)
// // // // // // setTimeout(function(){demorada(1000)}, 0)
// // // // // // console.log("chegou ao fim do script principal")
// // // // // const fs = require("fs")
// // // // // const abrirArquivo = function(nomeArquivo){
// // // // //     const exibirConteudo = function (erro, conteudo){
// // // // //         if(erro) {
// // // // //             console.log(`Deu erro: ${erro}`)
// // // // //         } else {
// // // // //             console.log(conteudo.toString())
// // // // //         }
// // // // //     }
// // // // //     fs.readFile(nomeArquivo, exibirConteudo)
// // // // // }
// // // // // abrirArquivo("arquivo.txt")
// // // // function calculoDemorado(numero) {
// // // //   return new Promise(function (resolve, reject) {
// // // //     if (numero <= 0) {
// // // //       reject("O número deve ser positivo.");
// // // //     }
// // // //     let res = 0;
// // // //     for (let i = 1; i <= numero; i++) {
// // // //       res += i;
// // // //     }
// // // //     resolve(res);
// // // //   });
// // // // }
// // // // calculoDemorado(-10)
// // // //   .then((resultado) => {
// // // //     console.log(resultado);
// // // //   })
// // // //   .catch((erro) => {
// // // //     console.log(erro);
// // // //   });
// // // function calculoRapidinho(numero){
// // //     return numero > 0
// // //        ? Promise.resolve((numero * (numero + 1)/2))
// // //        : Promise.reject("Número precisa ser maior que zero.")
// // // }
// // // calculoRapidinho(-10)
// // //     .then((resultado) => {
// // //         console.log(resultado)
// // //     })
// // //     .catch((erro) => {
// // //         console.log(erro)
// // //     })
// // // calculoRapidinho(10)
// // //     .then((resultado) => {
// // //         console.log(resultado)
// // //     })
// // //     .catch((erro) => {
// // //         console.log(erro)
// // //     })
// // // console.log("Esperando...")

// // const axios = require("axios");
// // // chave da api openweathermap.org
// // const appid = "";
// // //cidade desejada
// // const q = "Sao Caetano do Sul";
// // //unidade de medida de temperatura
// // const units = "metric";
// // //idioma
// // const lang = "pt_BR";
// // //quantidade de resultados
// // const cnt = "10";
// // //url de chamada
// // const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;

// // axios
// //   .get(url)
// //   .then((res) => {
// //     console.log(res);
// //     return res.data;
// //   })
// //   .then((res) => {
// //     //mostra o toal e devolve o resultado
// //     console.log(res.cnt);
// //     return res;
// //   })
// //   .then((res) => {
// //     //devolve somente a lista de previsoes
// //     console.log(res.list);
// //     return res.list;
// //   })
// //   .then((res) => {
// //     //para cada resultado, mostre algumas informacoes
// //     for (let previsao of res) {
// //       console.log(
// //         `
// //                 ${new Date(previsao.dt * 1000).toLocaleString()},
// //                 ${'Min : ' + previsao.main.temp_min}\u00B0C,
// //                 ${'Max : ' + previsao.main.temp_max}\u00B0C,
// //                 ${'Umid: ' + previsao.main.humidity}%,
// //                 ${previsao.weather[0].description}
// //                 `
// //       );
// //     }
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

async function hello(nome){
    return "Oi, " + nome
}
const boasVindas = hello('João')
console.log(boasVindas)
boasVindas
    .then((res) => console.log(res))

// function fatorial(n){
//     if (n < 0) return Promise.reject("Valor não pode ser negativo")
//     let res = 1
//     for (let i = 2; i <= n; i++) res *= i
//     return Promise.resolve(res)
// }

// async function chamadaComAwait(){
//     try{
//         const f1 = await fatorial(-5)
//         console.log(f1)
//     } catch (err){
//         console.log(err)
//     }
//     try{
//         const f2 = await fatorial(5)
//         console.log(f2)
//     } catch (err) {
//         console.log(err)
//     }
// }
// chamadaComAwait()