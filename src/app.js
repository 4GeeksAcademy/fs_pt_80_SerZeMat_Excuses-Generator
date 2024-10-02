/* eslint-disable */

import "./style.css";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};
// Creamos arrays con la excusas

const who = ["El perro", "Mi abuela", "El cartero", "Mi tortuga"];
const action = ["se comió", "meó", "aplastó", "rompió"];
const what = ["mis deberes", "mi teléfono", "el coche"];
const when = [
  "antes de la clase",
  "mientras dormía",
  "mientras hacía ejercicio",
  "durante mi comida",
  "mientras estaba conduciendo"
];

//Creamos el generador con el principio de una sola responsabilidad

const getRandom = arra_y => Math.floor(Math.random() * arra_y.length);
const getValue = arra_y => arra_y[getRandom(arra_y)];
const generateExcuse = () =>
  `${getValue(who)} ${getValue(action)} ${getValue(what)} ${getValue(when)}`;

//Sacamos en pantalla

console.log(getRandom(who));
console.log(getRandom(action));
console.log(getRandom(what));
console.log(getRandom(when));

console.log(
  `${getValue(who)} ${getValue(action)} ${getValue(what)} ${getValue(when)}`
);
