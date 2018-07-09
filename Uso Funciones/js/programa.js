function usoFunciones(entrada) {
    var dato = entrada.value;
    limpiar();
    if (dato > 0 && dato <= 100) {
        var resultado = factorial(dato);
        imprimir(resultado);
    } else {
        imprimir("Valor incorrecto. Se aceptan entre 1 y 100");
    }
}

function factorial(num) {
    if (num > 1) {
        return num * factorial(num - 1);
    }
    return 1;
}

function imprimir(res) {
    document.getElementById("resultado")
            .innerHTML = res;
}

function limpiar() {
    document.getElementById("resultado")
            .innerHTML = "";
}
