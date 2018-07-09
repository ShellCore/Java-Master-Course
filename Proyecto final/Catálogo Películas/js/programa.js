var peliculas = new Array();

function almacenaPelicula(entrada) {
    var pelicula = entrada.value;
    peliculas[peliculas.length] = pelicula;
    document.getElementById("listaPeliculas")
            .innerHTML = muestraPeliculas();
    limpiaCampoAlmacenamiento();
}

function consultaPelicula(entrada) {
    var pelicula = entrada.value;
    var index = peliculas.indexOf(pelicula);
    if (index < 0) {
        mostrarResultadoBusqueda("No se encontró la película en la lista");
    } else {
        mostrarResultadoBusqueda("La película tiene la posición " + index);
    }
}

function muestraPeliculas() {
    var res = "";
    for (i = 0; i < peliculas.length; i++) {
        res += "" + i + " - " + peliculas[i] + "<br />";
    }
    return res;
}

function mostrarResultadoBusqueda(message) {
    document.getElementById("resultadoIndice")
            .innerHTML = message;

}
