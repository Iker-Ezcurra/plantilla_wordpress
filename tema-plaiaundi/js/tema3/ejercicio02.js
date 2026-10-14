let notas = [5, 8, 3, 10, 6]
let suma = 0;
let aprobados = 0;

for (const nota of notas){
    suma += nota;
    if(nota>=5){
        aprobados++;
    }
}

console.log("La suma de las notas es: ",suma);

console.log("La media de las notas es: ",(suma/notas.length));

console.log("La cantidad de aprobados es: ",aprobados);