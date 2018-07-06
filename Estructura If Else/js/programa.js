function determinaClasificacionPorEdades(entrada) {
    var resultado = null;
    var edad = parseInt(entrada.value);

    if (edad > 0 && edad < 12) {
        resultado = "A y AA";
    } else if (edad >= 12 && edad < 15) {
        resultado = "B, A y AA";
    } else if (edad >=15 && edad < 18) {
        resultado = "B15, B, A y AA";
    } else if (edad >=18 && edad < 21){
        resultado = "C, B15, B, A y AA"
    } else if (edad >= 21) {
        resultado = "Puede ver cualquier tipo de películas"
    } else {
        resultado = "Edad no válida"
    }

    document.getElementById("resultado")
            .innerHTML = resultado;
}
