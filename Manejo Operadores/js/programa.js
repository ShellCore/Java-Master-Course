document.write("Programa para el manejo de operadores:<br /><br />");

// El operador = se utiliza para asignar un valor
var x = 10;

var y;
y = 15;

document.write("Valor de x: " + x + "<br />");
document.write("Valor de y: " + y + "<br />");
document.write("<br />");

// El operador + se utiliza para sumar
var z = x + y;
document.write("Valor de z: " + z + "<br />");
document.write("<br />");

// El operador ++ se utiliza para incrementar en 1
x++;
document.write("Valor de x: " + x + "<br />");
document.write("<br />");

// El operador -- se utiliza para decrementar en 1
y--;
document.write("Valor de y: " + y + "<br />");
document.write("<br />");

// El operador += sirve para sumar 2 variables, y asignar el resultado al primero
// x = x + y
x += y;
document.write("Valor de x: " + x + "<br />");
document.write("<br />");

// El operador + funciona como concatenación si alguno de los operandos es de tipo cadena
var texto1 = "Hola";
var texto2 = "Mundo";
document.write("Valor de la concatenación: " + texto1 + " " + texto2 + "<br />");
document.write("<br />");
