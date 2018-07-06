function determinarDiaSegunFechaSeleccionada(entrada) {
    var fechaTexto = null;
    var fecha = new Date(entrada.value);
    var dia = fecha.getDay();

    switch (dia) {
        case 0:
            fechaTexto = "Lunes";
            break;
        case 1:
            fechaTexto = "Martes";
            break;
        case 2:
            fechaTexto = "Miércoles";
            break;
        case 3:
            fechaTexto = "Jueves";
            break;
        case 4:
            fechaTexto = "Viernes";
            break;
        case 5:
            fechaTexto = "Sábado";
            break;
        case 6:
            fechaTexto = "Domingo";
            break;
        default:
            fechaTexto = "Valor erroneo";
            break;
    }

    document.getElementById('resultado')
            .innerHTML = "El día de la semana es " + fechaTexto;
}
