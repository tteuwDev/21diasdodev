let condicao = true

while (condicao){
    let idade =  Number (prompt("insira sua idade"))
    if (idade < 18){
        console.log ("voçê e menor de idade")
        condicao = false
    }
} 

console.log ('acabou o child')