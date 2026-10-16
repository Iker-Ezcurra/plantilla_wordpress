/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 9 · Menú con switch
 */

let opcion = prompt("Escribe una opcion: ");

switch(opcion.toLowerCase()){
    case 'alta':
        console.log("Alta");
        break;
    case 'baja':
        console.log("Baja");
        break;
    case 'consultar':
        console.log("Consultar");
        break;
    case 'salir':
        console.log("Salir");
        break;
    default:
        console.log("Opcion no valida");
}