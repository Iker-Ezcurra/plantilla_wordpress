/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 4 · ¿const o let?
 */

let precio;
let contador = 0;
const nombre = "";
let saldo;
const IVA = 21;
const resultado = 3-1;

let deposito = 100;
const retirar = 7;

while (deposito>0){
    deposito = deposito - retirar;
    if(deposito>0){
        console.log('El deposito tiene ',deposito,'litros');
    } else {
        console.log('El deposito esta vacio');
    }
}