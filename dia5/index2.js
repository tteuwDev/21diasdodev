let quantidade 
let valor 
let opcao = prompt ("Bem vindo ao TTeuwBRaz, você deseja:"
+ "\n1 - abastecer com gasolina; \n2 - abastecer com álcool; \n3 - Calibrar os pneus")

switch (opcao) {
    case "1": 
        valor = parseInt (prompt ("qual valor deseja abastecer?"))
        quantidade = valor / 5
        console.log ("Foram abastecidos " + quantidade + "L de gasolina")
        break;
    case "2":
        valor = parseInt (prompt ("qual valor deseja abastecer?"))
        quantidade = valor / 3
        console.log ("Foram abastecidos " + quantidade + "L de Àlcool")
        break;
    default:
        console.log ("Os pneus foram calibrados com sucesso")
        break;
        



}