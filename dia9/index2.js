let confirmar = "n"
while (confirmar != "s") {
let nome = prompt("Informe seu Nome")
let idade = prompt("Informe sua idade")
let salario = parseInt( prompt ("Informe seu salario"))
console.log("Nome:" + nome + " Idade:" + idade + " Salario:" + salario)
confirmar = prompt ("Voçê confirma Suas Informações? (s/n)")
}

// Previção salario proximos 10 anos//

let aumento = 0.015
console.log("Previção Salarial Proximos 10 anos")

for (let ano = 1; ano <= 10; ano++) {
    salario += salario * aumento
    aumento *= 2

    console.log((2024 + ano) + " = R$ " + salario)
}


    