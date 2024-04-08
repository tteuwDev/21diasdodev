let nome = prompt ("insira seu Nome")
let idade = prompt ("Insira sua idade")
let peso = parseInt (prompt  ("Insira seu peso"))
let altura = prompt ("Insira sua Altura")
let profissao = prompt ("Qual sua Profissão")

console.log ("olá " + nome + " Você tem " + idade + " anos " + "é " + profissao + " e sua Altura é " + altura + " e seu peso é " + peso + "Kg. ")

if (idade >= 18) {
    console.log ("Sextou papai, bora tomar umas Geladas você está liberado para beber")
} else {
console.log("Sextouu, mais voçê não pode beber")
}

let dias = idade*365
let semanas = idade*52
let meses = idade*12

console.log("Sua idade em dias é " + dias)
console.log("Sua idade em semanas é " + semanas)
console.log("Sua idade em meses é " + meses)

let imc = parseInt(peso / altura*altura)
console.log(imc + "kg/m2")

if (imc < 18,5)
console.log("Voçê está Magro para sua Estatura")

if (imc > 18,5 && imc < 24.9){
    console.log("voçê está no peso normal para sua estatura ")
}

if (imc > 24,9 && imc < 30){
    console.log("Voçê esta no Sobre peso para sua Estatura")
}

if (imc < 30){
    console.log("Voce está em estado de Obesidade, cuide da sua Saúde")
}
let anoatual = 2024
let nascimento =  anoatual - idade
 console.log("Voçê Nasceu no Ano de " + nascimento)

//  anos que Viveu //

let anovivido = nascimento
let idadeAtual = 0

for (let anovivido = nascimento; anovivido <= anoatual; anovivido++){
    console.log (anovivido + " - " + idadeAtual + " Anos de idade")
    idadeAtual ++
}

do {
    let continuar = prompt("Deseja Inserir os dados novamente? (s/n)")
} while (continuar == "s")