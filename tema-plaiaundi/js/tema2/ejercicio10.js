/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 10 · Múltiplos y divisibilidad
 */

let contador = 1;

while(contador<=100){
    if(!(contador%3)){
        if(contador%5){
            console.log(contador);
        }
    }
    contador++;
}