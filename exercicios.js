const prompt  = require('prompt-sync')()

// // ============================================================
// //  LISTA DE EXERCÍCIOS - JAVASCRIPT
// // ============================================================
// //  Instruções gerais:
// //  - Resolva os exercícios na ordem, do mais fácil ao mais difícil
// //  - Cada exercício tem uma explicação do que fazer
// //  - Use console.log() para mostrar os resultados
// //  - Para testar, abra o navegador e veja o console (F12)
// //  - Tente fazer sozinho antes de pedir ajuda!
// // ============================================================


// // ============================================================
// //  BLOCO 1 - VARIÁVEIS, TIPOS E OPERADORES
// // ============================================================


// // EXERCÍCIO 1 - Calculadora simples
// // Crie 2 variáveis com números e mostre no console
// // o resultado da soma, subtração, multiplicação e divisão.
// // ------------------------------------------------------------

 function Calculadora() {



let numero1 = parseFloat(prompt("escolha o primeiro numero:"))
let numero2 = parseFloat(prompt("escolha segundo numero:"))

 let opcao = parseInt(prompt("1)soma\n2)subtraçao\n3)divisao\n4)multiplicaçao\nescolha uma opçao:"))

 let resultado = 0;

 switch(opcao){
     case 1 : 
     resultado = numero1 + numero2
     console.log("o resultado é: " + resultado  )
     break

     case 2 : 
     resultado =numero1 - numero2
     console.log("o resultado é: " + resultado  )
     break

    case 3 : 
    resutado = numero1/numero2
    console.log("o resultado é: " + resultado  )
     break

     case 4: 
     resultado = numero1*numero2
     console.log("o resultado é: " + resultado  )
     break 
 }
 }
 Calculadora() 

// // EXERCÍCIO 2 - Conversor de temperatura
// // Crie uma variável com um valor em Celsius.
// // Converta para Fahrenheit e mostre no console.
// // Fórmula: F = C * 9/5 + 32
// // ------------------------------------------------------------

 function conversor(){

let celcius = parseFloat(prompt("digite quantos graus deseja converter:"))

 let f = celcius * 1.8 + 32

 console.log(celcius + " graus celcius equivalem a " + f + " graus Fahrenheit")
 }
 conversor()


// // EXERCÍCIO 3 - Par ou ímpar
// // Crie uma variável com um número.
// // Mostre no console se ele é par ou ímpar.
// // Dica: use o operador % (resto da divisão)
// // Se numero % 2 === 0, é par.
// // ------------------------------------------------------------

function ParImpar(){

let numero = parseInt(prompt("escolha um numero:"))

if(numero % 2 ===0){
    console.log("o numero " + numero + "é par ")
}else{
    console.log("o numero " + numero + " é impar")
}
}
ParImpar()


// // EXERCÍCIO 4 - Média de notas
// // Crie 3 variáveis com notas (de 0 a 10).
// // Calcule a média e mostre no console.
// // Se a média for >= 7, mostre "Aprovado".
// // Se não, mostre "Reprovado".
// // ------------------------------------------------------------

function media(){
let nota1 = 8
let nota2 = 9
let nota3 = 7

let resultado = (nota1 + nota2 + nota3) /3
console.log(resultado)
if( resultado>= 7 ){
    console.log("aluno aprovado")
}else if(resultado < 7){
    console.log("aluno reprovado")
}
}
media()


// // ============================================================
// //  BLOCO 2 - CONDICIONAIS (if/else, switch)
// // ============================================================


// // EXERCÍCIO 5 - Maior de idade
// // Crie uma variável com uma idade.
// // Se for >= 18, mostre "Maior de idade".
// // Se não, mostre "Menor de idade".
// // ------------------------------------------------------------

function Maioridade(){

let resultado = prompt("quantod anos voce tem?")

    if( resultado>= 18 ){
     console.log("Maior de idade")
}else if(resultado <= 17){
     console.log("Menor de idade ")
}
}

Maioridade()


// EXERCÍCIO 6 - Calculadora de IMC
// Crie variáveis para peso (em kg) e altura (em metros).
// Calcule o IMC: peso / (altura * altura)
// Mostre a faixa no console:
//   Abaixo de 18.5 = "Abaixo do peso"
//   18.5 até 24.9  = "Peso normal"
//   25 até 29.9    = "Sobrepeso"
//   30 ou mais     = "Obesidade"
// ------------------------------------------------------------

function IMC(){

    let peso = Number(prompt("qual seu peso?:"))
    let altura = Number(prompt("qual sua altura?:"))

    let resultado = peso / (altura * altura)

    if(resultado<=18.5){
        console.log("abaixo do peso")
    }else if(resultado >= 18.5 && resultado <=24.9){
        console.log("peso normal")
    }else if(resultado >= 25 && resultado <=29.9){
        console.log("sobrepeso")
    }else{
        console.log("obesidade")
    }
}

IMC()


// EXERCÍCIO 7 - Pedra, papel e tesoura
// Crie uma variável com sua jogada ("pedra", "papel" ou "tesoura").
// Faça o computador escolher aleatoriamente uma jogada.
// Dica para escolha aleatória:
//   let opcoes = ['pedra', 'papel', 'tesoura']
//   let computador = opcoes[Math.floor(Math.random() * 3)]
// Compare as jogadas e mostre quem ganhou.
// ------------------------------------------------------------

function Ppt(){
    let opcoes = ['pedra', 'papel','tesoura']
    let Jcomputador = opcoes[Math.floor(Math.random() * 3)]

    let Jusuario = prompt(console.log("escolha um\npedra\npapel\ntesoura\n:"))

    console.log("o computador escolheu: " + Jcomputador + " e voce escolheu: " + Jusuario)
}
Ppt()

// EXERCÍCIO 8 - Sistema de notas
// Crie uma variável com uma nota de 0 a 10.
// Use if/else para mostrar o conceito:
//   10 e 9   = "A"
//   8 e 7    = "B"
//   6 e 5    = "C"
//   4 e 3    = "D"
//   2, 1, 0  = "F"
// ------------------------------------------------------------

function notas(){

    let nota = 7

    if(nota>=9 && nota <=10){
        console.log("sua nota é: A ")
    }else if(nota>= 7 && nota <=8){
        console.log("sua nota é: B")
    }else if(nota>= 5 && nota <=6){
        console.log("sua nota é: C")
    }else if(nota>= 3 && nota <=4){
        console.log("sua nota é: D")
    }else if(nota >= 0 && nota <= 2){
        console.log("sua nota é: F")
    }

}
notas()


// ============================================================
//  BLOCO 3 - LOOPS (for, while)
// ============================================================


// EXERCÍCIO 9 - Tabuada
// Crie uma variável com um número.
// Use um for para mostrar a tabuada desse número (de 1 a 10).
// Exemplo para o número 5:
//   "5 x 1 = 5"
//   "5 x 2 = 10"
//   ... até "5 x 10 = 50"
// ------------------------------------------------------------

function contador(){


let numero = parseInt(prompt("digite um numero para ver a tabuada dele:"))
let resultado = 0

for (let i = 1; i<= 10 ; i++){
    if(numero != 0 ){
        console.log(numero * i)
    }
}
}
contador()



// EXERCÍCIO 10 - Contagem regressiva
// Use um for para contar de 10 até 0.
// Mostre cada número no console.
// No final, mostre "Feliz Ano Novo!" (ou qualquer mensagem).
// ------------------------------------------------------------

function regressiva(){
    for (let i = 10; i >= 0; i--) {
    console.log(i)
}

console.log("Vamos pra casa!")
}
regressiva()


// EXERCÍCIO 11 - Somar números
// Crie uma variável N com um número qualquer.
// Use um for para somar todos os números de 1 até N.
// Mostre o resultado no console.
// Exemplo: se N = 5, resultado = 1+2+3+4+5 = 15
// ------------------------------------------------------------

function SomarN(){
    let Numero = Number(prompt("digite um numero: "))
    let resultado = 0

    for (let i = 0 ; i <= Numero; i++){
        resultado += i
    }
    console.log(resultado)
}
SomarN()


// EXERCÍCIO 12 - Adivinhe o número
// O computador escolhe um número aleatório de 1 a 10:
//   let secreto = Math.floor(Math.random() * 10) + 1
// Use um while para o usuário tentar adivinhar.
// A cada tentativa, diga se o palpite é "maior" ou "menor".
// Quando acertar, mostre "Parabéns! Acertou!"
// Dica: use prompt() para pedir o palpite do usuário.
// ------------------------------------------------------------

function adivinhar(){
    let secreto = Math.floor(Math.random() * 100) + 1
    let palpite 

    do{
        palpite = Number(prompt("qual é o numero?:"))

        if(palpite<secreto){
            console.log("maior")
        }else if(palpite>secreto){
            console.log("menor")
        }
    }while(palpite != secreto){
        console.log("Parabens! voce acertou !!!")
    }
}
adivinhar()

// ============================================================
//  BLOCO 4 - FUNÇÕES
// ============================================================


// EXERCÍCIO 13 - Função de saudação
// Crie uma função chamada "saudacao" que recebe um nome
// e retorna "Olá, [nome]!"
// Chame a função e mostre o resultado no console.
// Exemplo: saudacao("Maria") retorna "Olá, Maria!"
// ------------------------------------------------------------

function saudacao(nome) {
    return "Olá, " + nome + "!"
}

console.log(saudacao("sabrina"))

saudacao()


// EXERCÍCIO 14 - Número primo
// Crie uma função chamada "ehPrimo" que recebe um número
// e retorna true se for primo, false se não for.
// Número primo: só é divisível por 1 e por ele mesmo.
// Dica: use um for de 2 até numero-1 e verifique se
// algum divide o número sem resto (numero % i === 0).
// ------------------------------------------------------------




// EXERCÍCIO 15 - Inverter string
// Crie uma função chamada "inverter" que recebe uma string
// e retorna ela invertida.
// Exemplo: inverter("javascript") retorna "tpircsavaj"
// Dica: use split('') para virar array, reverse() para
// inverter, e join('') para voltar a ser string.
// ------------------------------------------------------------




// EXERCÍCIO 16 - Contar vogais
// Crie uma função chamada "contarVogais" que recebe uma
// palavra e retorna quantas vogais ela tem.
// Exemplo: contarVogais("javascript") retorna 3
// Dica: transforme em minúscula com .toLowerCase()
// e verifique cada letra com um for.
// ------------------------------------------------------------




// ============================================================
//  BLOCO 5 - ARRAYS
// ============================================================


// EXERCÍCIO 17 - Lista de compras
// Crie um array vazio chamado "listaCompras".
// Adicione 5 itens usando push().
// Mostre a lista no console.
// Remova o último item com pop() e mostre a lista novamente.
// ------------------------------------------------------------




// EXERCÍCIO 18 - Maior e menor
// Crie um array com 8 números diferentes.
// Encontre o maior e o menor número do array.
// Mostre os dois no console.
// Dica: use Math.max(...array) e Math.min(...array)
// Ou tente fazer com um for (mais desafiador!).
// ------------------------------------------------------------




// EXERCÍCIO 19 - Ordenar nomes
// Crie um array com 6 nomes de pessoas.
// Ordene em ordem alfabética e mostre no console.
// Depois ordene ao contrário (Z até A) e mostre também.
// Dica: use .sort() e .reverse()
// ------------------------------------------------------------




// EXERCÍCIO 20 - Filtrar pares
// Crie um array com os números de 1 a 20.
// Filtre apenas os números pares e guarde num novo array.
// Mostre o array de pares no console.
// Dica: use .filter(function(numero) { return numero % 2 === 0 })
// ------------------------------------------------------------




// ============================================================
//  BLOCO 6 - DOM (Manipulação da página)
// ============================================================
//  Para esses exercícios, você vai precisar criar elementos
//  no HTML ou usar o index.html que já existe.
//  Peça ajuda ao professor se precisar do HTML!
// ============================================================


// EXERCÍCIO 21 - Mudar cor de fundo
// Crie 3 botões no HTML (Vermelho, Azul, Verde).
// Ao clicar em cada botão, mudar a cor de fundo da página.
// Dica: document.body.style.backgroundColor = 'red'
// ------------------------------------------------------------




// EXERCÍCIO 22 - Contador
// Crie no HTML: um <h1> com o número 0, e dois botões (+ e -).
// Ao clicar em "+", o número aumenta 1.
// Ao clicar em "-", o número diminui 1.
// Dica: use uma variável para guardar o valor do contador
// e atualize o textContent do <h1> a cada clique.
// ------------------------------------------------------------




// EXERCÍCIO 23 - Mostrar e esconder
// Crie no HTML: um botão "Mostrar/Esconder" e um <div> com
// um texto qualquer dentro.
// Ao clicar no botão, o <div> deve aparecer/desaparecer.
// Dica: use classList.toggle() com uma classe CSS que tenha
// display: none
// ------------------------------------------------------------




// EXERCÍCIO 24 - Lista de tarefas
// Esse exercício é a atividade principal!
// Abra o arquivo script.js da atividade e complete os níveis.
// ------------------------------------------------------------


// ============================================================
//  BLOCO 7 - DOM + LÓGICA COMBINADA (Desafio!)
// ============================================================


// EXERCÍCIO 25 - Cronômetro
// Crie no HTML: um <h1> mostrando "00:00" e 3 botões
// (Iniciar, Pausar, Resetar).
// O cronômetro deve contar segundos e minutos.
// Dica: use setInterval() para contar e clearInterval() para pausar.
// ------------------------------------------------------------




// EXERCÍCIO 26 - Quiz de perguntas
// Crie um quiz com 5 perguntas de múltipla escolha.
// Mostre uma pergunta por vez na página.
// No final, mostre a pontuação (ex: "Você acertou 3 de 5").
// Dica: guarde as perguntas num array de objetos:
//   { pergunta: "...", opcoes: ["a", "b", "c"], correta: 1 }
// ------------------------------------------------------------




// EXERCÍCIO 27 - Gerador de senha
// Crie no HTML: um campo para o tamanho da senha,
// checkboxes para (maiúsculas, números, símbolos)
// e um botão "Gerar".
// Ao clicar, gerar uma senha aleatória e mostrar na tela.
// Dica: crie uma string com os caracteres possíveis e use
// Math.random() para escolher caracteres aleatórios.
// ------------------------------------------------------------




// EXERCÍCIO 28 - Galeria de imagens
// Crie no HTML: uma <img> grande e dois botões (Anterior, Próximo).
// Crie um array com URLs de imagens.
// Ao clicar nos botões, trocar a imagem mostrada.
// Dica: mude o atributo src da <img> com JavaScript.
// ------------------------------------------------------------


