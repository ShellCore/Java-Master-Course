function manejoArreglos() {
    var lengua = null;

    // Definición del arreglos
    var lenguas = new Array();
    lenguas[0] = "Chino Mandarín";
    lenguas[1] = "Español";
    lenguas[2] = "Inglés";
    lenguas[3] = "Hindi";
    lenguas[4] = "Japonés";

    // Recorrido del arreglo
    for (i = 0; i < lenguas.length; i++) {
        lengua = lenguas[i];
        imprimir(lengua);
    }
}

function imprimir(valor) {
    document.getElementById("resultado")
            .innerHTML += valor + "<br />";
}

function limpiar() {
    document.getElementById("resultado")
            .innerHTML = "";
}
