document.write("Programa para validar si el número entero positivo es par:<br />");

var num = parseInt(prompt("Proporcione un número entero positivo:", 1));

document.write("El número proporcionado es: " + num + "<br />");

if (num >= 0) {
    if ((num % 2) == 0) {
        document.write("Si es un número par.");
    } else {
        document.write("No es un número par.");
    }
} else {
    document.write("El número debe ser mayor o igual a cero.");
}
