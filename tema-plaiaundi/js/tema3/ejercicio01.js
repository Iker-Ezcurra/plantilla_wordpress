/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 1 · ¿Qué tipo tengo realmente?
 */
const esPar = num => num%2;

let num = prompt("Inserte un numero: ");

if (esPar(num)){
    console.log("Es impar");
} else {
    console.log("Es par");
}