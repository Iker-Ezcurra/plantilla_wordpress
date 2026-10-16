function aprueba1(nota){
    if(nota>=5){
        return true;
    } else {
        return false;
    }
}

const aprueba2=function(nota){
    if(nota>=5){
        return true;
    } else{
        return false;
    }
}

const aprueba3 = nota => nota>=5;

const alumnos = [
    { nombre: "Ane", nota: 8 },
    { nombre: "Iker", nota: 4 },
    { nombre: "June", nota: 7 }
];
const copia1 = alumnos.map(obj=> ({...obj, aprobado: aprueba1(obj.nota)}));
console.log("funcion declarada: ", copia1);
const copia2 = alumnos.map(obj=> ({...obj, aprobado: aprueba2(obj.nota)}));
console.log("funcion mediante expresion: ", copia2);
const copia3 = alumnos.map(obj=> ({...obj, aprobado: aprueba3(obj.nota)}));
console.log("funcion flecha: ", copia3);
const copia4 = alumnos.map(obj => ({
    ...obj,
    aprobado: (function(nota) {
        return nota >= 5;
    })(obj.nota)
}));
console.log("función anónima dentro de map: ", copia4);
const copia5 = alumnos.map(obj=> ({...obj, aprobado: (aprueba5 = nota => nota>=5)}))
console.log("funcion flecha dentro de map: ", copia5);