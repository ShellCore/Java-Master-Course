function realizarOperacion(operacion) {
    var a = leerDato("a", 0);
    var b = leerDato("b", 0);
    var res = null;
    switch (operacion) {
        case "+":
            res = a + b;
            break;
        case "-":
            res = a - b;
            break;
        case "*":
            res = a * b;
            break;
        case "/":
            res = a / b;
            break;
        default:
            break;
    }
    imprimeResultado(operacion, a, b, res);
}

function leerDato(varName, defValue) {
    return parseInt(prompt("Escriba el valor de " + varName + ":", defValue));
}

function imprimeResultado(operacion, a, b, res) {
    alert("El resultado de " + a + " " + operacion + " " + b + " = " + res);
}
