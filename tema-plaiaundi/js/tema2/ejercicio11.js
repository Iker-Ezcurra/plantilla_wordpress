/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 11 · Acumulador con while
 */
let pedirNumero = true;

let numeros =[];
let suma = 0;

do{
    let num = prompt("Inserte un nuevo numero: ");
    if(!Number.isNaN(num)){
        if(num == 0){
            pedirNumero = false;
        }else{
            numeros.push(num);
        }
    } else {
        console.log("Inserte un numero")
    }    
}while(pedirNumero);

for(let i=0; i<numeros.length;i++){
    suma = suma + Number(numeros[i]);
}

console.log("Entrada: " + numeros);
console.log("Salida: suma = "+suma+", cantidad = "+numeros.length+", media = "+suma/numeros.length);