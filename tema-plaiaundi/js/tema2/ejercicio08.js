/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 8 · Clasificación de una nota
 */

let nota = prompt("Inserte la nota: ");

if(!Number.isNaN(nota)){
    if(nota>=0 && nota <=10){
       if(nota<5){
        console.log("Suspenso");
       } else if(nota<7){
        console.log("Aprobado");
       } else if(nota<9){
        console.log("Notable");
       } else {
        console.log("Sobresaliente");
       }
    } else {
        console.log("Inserte un numeor valido dentro del rango");
    }
} else {
    console.log("Inserte un numero");
}