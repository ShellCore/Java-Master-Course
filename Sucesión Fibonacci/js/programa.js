function sucesionFibonacci(entrada) {
    limpiar();
    /**
        Manejo de la secuencia de Fibonacci
        a: Valor actual
        b: valor nuevo
        c: valor siguiente
    */

    var a = 0;
    var b = 1;
    var c = null;
    var max = 80;
    var elementosSerie = entrada.value;

    if (elementosSerie > max) {
        imprimir("Debes probar con menos de 100 elementos");
        return;
    }

    imprimir(a);
    imprimir(b);

    for (i = 0; i < elementosSerie - 2; i++) {
        c = a + b;
        a = b;
        b = c;
        imprimir(c);
    }
}

function imprimir(res) {
    document.getElementById("resultado")
            .innerHTML += res + "<br />";
}

function limpiar() {
    document.getElementById("resultado")
            .innerHTML = "";
}
