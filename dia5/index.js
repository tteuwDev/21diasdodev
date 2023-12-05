var Num1 = parseInt (prompt('Escolha um numero'))
var Num2 = parseInt ( prompt ('Escolha um numero'))
var opcao = parseInt ( prompt ("Escolha a operação que deseja realizar:"
  +  "\n1 = + \n2 = - \n3 = * \n4 = /"))

switch (opcao) {
    case 1:
        console.log(Num1 + " + " + Num2 + " = " + (Num1 + Num2))
        break;
    case 2:
        console.log(Num1 + " - " + Num2 + " = " + (Num1 - Num2))
        break;
    case 3:
        console.log(Num1 + " * " + Num2 + " = " + (Num1 * Num2))
        break;
    default:
        console.log(Num1 + " / " + Num2 + " = " + (Num1 / Num2))
        break;
}
