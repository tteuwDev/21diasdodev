let nameUser = prompt ("digite seu nome completo")
let IdadeUser = parseInt(prompt("digite sua Idade"))

let alturaUser = Number (prompt('digite sua altura'))
let PesoUser = Number (prompt("digite seu Peso"))

let nascimento = 2023 - IdadeUser


let imc = PesoUser / (alturaUser * alturaUser)

console.log ("Olá " + nameUser + " você tem " + IdadeUser + " anos, nasceu em " + nascimento + " tem " + alturaUser + " de altura, pesa " + PesoUser + "kg seu IMC é " + imc + " Kg/m2")