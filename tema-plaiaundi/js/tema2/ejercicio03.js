/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 3 · Calculadora resistente a entradas incorrectas
 */

let num1 = prompt("Inserte el primer numero: ");
let num2 = prompt("Inserte el segundo numero: ");
num1 = Number(num1);
num2 = Number(num2);

if (!Number.isNaN(num1) && !Number.isNaN(num2)){
    console.log(num1,' + ',num2,' = ',num1 + num2);
    console.log(num1,' - ',num2,' = ',num1 - num2);
    console.log(num1,' * ',num2,' = ',num1 * num2);
    if(num1 != 0 && num2 !=0 ){
        console.log(num1,' / ',num2,' = ',num1 / num2);
    } else {
        console.log("No se puede hacer la division");
    }
    
} else {
    console.log("Inserte numeros para hacer los calculos");
}