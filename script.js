// Exercício 1
let valorDaCompra = parseFloat(prompt("Qual o valor que o senhor deseja pôr? "));
let valorLitro = parseFloat(valorDaCompra/6,80);

alert(`O cliente abasteceu ${valorLitro}l`);

// Exercício 2
let C = prompt(`Fale uma temperatura em °C para ser convertida em °F:`)
let Ftemp = (9 * C +160)/5

alert(`O valor de ${C}C° é igual a ${Ftemp}°F`)

// Exercício 3
let F = prompt(`Fale um temperatura em °F para ser convertida para °C:`)
let Ctemp = ((F - 32) * 5) / 9

alert(`A temperatura ${F}°F é igual a ${Ctemp}°C`)

//Exercício 4
let comprimento = prompt(`Fale o compimento da caixa:`)
let largura = prompt(`Fale a largura da caixa:`)
let altura = prompt(`Fale a altura da caixa:`)
let volume = comprimento*largura*altura

alert(`O valor do volume da sua caixa é ${volume}m³`)

// Exercício 5
let num = parseInt(prompt(`Fale número:`))
let quadrado = num**2

alert(`O numero ${num} elevado ao quadrado é ${quadrado}`)

// Exercício 6
let valor1 = parseInt(prompt(`Fale sua nota em Matemática: `))
let valor2 = parseInt(prompt(`Fale sua nota em Português:`))
let valor3= parseInt(prompt(`Fale sua nota em Biologia:`))
let valor4 = parseInt(prompt(`Fale sua nota em Geografia:`))
let valor5 = parseInt(prompt(`Fale sua nota em História:`))
let soma = (valor1 +valor2 +valor3 +valor4 +valor5)
let media = (soma/5)

alert(`A soma dos valores informados é:${soma} e a média é:${media}`)

// Exercício 7
let numero1 = parseInt(prompt(`Fale um numero:`))
let numero2 = parseInt(prompt(`Fale outro numero`))
let divresto = numero1%numero2

alert(`O resto da divisão de ${numero1} por ${numero2} é ${divresto}`)

// Exercício 8
let palavra = prompt("Fale uma palavra ou uma frase:")
let compriment = palavra.length

alert(`Este texto tem ${compriment} caracteres`)

// Exercício 9
let frase = prompt("Escreva uma palavra ou frase:")
let letraM = frase[0].toUpperCase();
let letram = frase[frase.length-1].toLowerCase()

alert(`O texto começa com a letra ${letraM} e termina com a letra ${letram}`)

// Exercício 10
let nome = prompt("Informe seu nome:")
nome = (nome[0].toUpperCase() +nome.slice(1).toLowerCase())
let sobrenome = prompt("Informe seu sobrenome:")
sobrenome = (sobrenome[0].toUpperCase() +sobrenome.slice(1).toLowerCase())
let idade = parseInt(prompt("Informe sua idade:"))
let setor = prompt("Informe seu setor de trabalho:")

alert(`Nome: ${nome} ${sobrenome} - Idade: ${idade} - Setor: ${setor}`)