function manejoMatrices() {
    var dato = null;

    /**
     * Manejo de la matriz
     * [a b c]
     * [d e f]
     * [g h i]
     */

     // Creación de la matriz
     var a = crearArreglo();

     // Recorriendo la matriz
     for (i = 0; i < a.length; i++) {
         // Recorrer cada renglón individual
         for (j = 0; j < a[i].length; j++) {
             dato = a[i][j];
             imprimir(dato);
         }
         imprimir("<br />");
     }
}

function crearArreglo() {
    // Arreglos individuales
    var a1 = new Array();
    a1[0] = 'a';
    a1[1] = 'b';
    a1[2] = 'c';

    var a2 = new Array();
    a2[0] = 'd';
    a2[1] = 'e';
    a2[2] = 'f';

    var a3 = new Array();
    a3[0] = 'g';
    a3[1] = 'h';
    a3[2] = 'i';

    var a = new Array();
    a[0] = a1;
    a[1] = a2;
    a[2] = a3;

    return a;
}

function imprimir(valor) {
    document.getElementById("resultado")
            .innerHTML += valor + " ";
}

function limpiar() {
    document.getElementById("resultado")
            .innerHTML = "";
}
