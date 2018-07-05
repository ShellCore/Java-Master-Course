document.write("Programa para contar el número de dígitos de un número entero positivo:<br />");

var num = parseInt(prompt("Proporcione un número entero positivo: ", 1));

document.write("El número proporcionado es: " + num + "<br />");

var counter = 0;

while (num >= 1) {
    num = num / 10;
    counter++;
}

document.write("El número proporcionado contiene " + counter + " dígitos.");
