
const producto = {
    nombre: "teclado",
    precio: 10,
    proveedor:{nombre: "A"},
}

const alias = producto;

console.log(alias.nombre);

const copia = {...producto};
copia.precio=20;
copia.proveedor.nombre="B";

console.log(copia.precio);
console.log(copia.proveedor);