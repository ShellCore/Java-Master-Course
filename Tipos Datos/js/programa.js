document.write("Programa para el manejo de tipo de datos<br /><br />");

// Cadena (String)
var cadena = "Hola desde JavaScript";
document.write("Valor de la cadena: " + cadena + "<br />");
document.write("<br />");

// Números
var num1 = 15;
var num2 = parseInt("20");
var num3 = num1 + num2;

document.write("Valor de num1: " + num1 + "<br/>");
document.write("Valor de num2: " + num2 + "<br/>");
document.write("Valor de num3: " + num3 + "<br/>");
document.write("<br />");

// Boolean
var bandera = true;
var resultado = (num1 == num2);

document.write("Valor de bandera: " + bandera + "<br/>");
document.write("Valor de resultado: " + resultado + "<br/>");
document.write("<br />");

// Especiales
var tipoNull = null;
var tipoIndefinido;
document.write("Valor de tipoNull: " + tipoNull + "<br/>");
document.write("Valor de tipoIndefinido: " + tipoIndefinido + "<br/>");
document.write("<br />");

// Conocer el tipo de dato
resultado = (typeof num1 == "number");
document.write("¿num1 es número?: " + resultado + "<br />");

resultado = (typeof cadena == "string");
document.write("¿cadena es string?: " + resultado + "<br />");

resultado = (typeof bandera == "boolean");
document.write("¿bandera es booleano?: " + resultado + "<br />");
document.write("<br />");
