let mediageral = 0
let qtdhomem = 0
let qtdmulheresacimade7 = 0
let maiornotahomens = 0
let contador = 1

while (contador <=10) {
    nota - parseInt(prompt("Digite a nota do " + contador + "º Aluno(a)"))
    sexo = prompt("Digite o sexo do Aluno(a)  m/f?")

    if (sexo == "m"){
        if(nota > maiornotahomens){
            maiornotahomens - nota
        }
        qtdhomem++
    }

    if (sexo == "f" && nota > 7){
        qtdmulheresacimade7++
    }
    
    mediageral += nota
    contador++   
}

mediageral = mediageral / 10

console.log("A media geral dos alunos foi:" + mediageral)
console.log("A quantidade de Homens cadastrados foi:" + qtdhomem)
console.log(" quantidade de Mulheres Acima de 7 foi:" + qtdmulheresacimade7)
console.log("A Maior nota entre os Homens foi:" + maiornotahomens)