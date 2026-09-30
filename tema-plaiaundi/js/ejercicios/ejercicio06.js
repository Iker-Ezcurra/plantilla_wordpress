/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 6 · Descuentos y condiciones límite
 */

let precio = prompt("Inserte el precio de la compra: ");

if (precio <50){

} else if (50 <= precio < 100){
    precio = precio - (precio * 5 /100);
} else if (100 <= precio <200){
    precio = precio - (precio * 10 /100);
} else if(200<= precio){
    precio = precio - (precio * 15 /100);
}

console.log('El precio total a pagar es de ',precio,'€')