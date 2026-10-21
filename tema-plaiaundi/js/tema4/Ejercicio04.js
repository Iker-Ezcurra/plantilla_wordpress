
class Libro{
    constructor(titulo, precio, unidades){
        this.titulo = titulo,
        this.precio = precio,
        this.unidades = unidades
    }

    calcularImporte(){
        return this.precio * this.unidades
    };

    estaDisponible(){};
}

let libros = [];

const libro1 = new Libro("A", 12, 3);
libros.push(libro1);
const libro2 = new Libro("B", 20, 0);
libros.push(libro2);

console.log(libros.map(l=>l.titulo));
console.log(libros.filter(l=> l.unidades>0))

const importeTotal = libros.reduce((total, libro) =>{
    return total + libro.calcularImporte();
}, 0);

console.log(importeTotal);