//Mi primer archivo de javascript con funciones
//esta linea nos escribe hola mundo en el navegador
document.write("Hola mundo!");

//Para crear una variable es la palabra var o let
let nombre="Diego";
var Edad=20;

document.write("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"+
"tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"+
"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"+
"consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"+
"cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non"+
"proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>")
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write(nombre + " tu edad es: " + Edad);
document.write("<br>");
var num1=9;
var num2=8;
document.write(num1+num2);
document.write("<br>");
document.write("9"+"8");

//Tipos de datos en JS
//Numerico
let numero=20;

//Dato con decimal
let numero2=20.6;

//Cadena String
let cadena="Los mejores programadores son del 3roA";

document.write(numero);
document.write(numero2);
document.write(cadena);

//Tipos de dato arreglos
var amigos=["Paulo","Eder","Sosin"];
document.write(amigos);

//Objetos
let objetos={color:"azul", altura:150, ancho:50};
document.write(objetos.color);

//No definir variables
let nombre2;
document.write(nombre2);

//Valores invalidos
var x=10;
var y="Hola mundo";

document.write(x*y);






