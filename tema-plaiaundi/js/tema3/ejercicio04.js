const productos = [
    { id:1, nombre: "Monitor", precio: 53.40 },
    { id:2, nombre: "Teclado", precio: 21.60 },
    { id:3, nombre: "Raton", precio: 15.51 }
];
const precios = productos.map(p=>p.precio);
console.log("Precios: ", precios);

const precioMeno40 = productos.filter(p => p.precio <40);
console.log("Precios inferiores a 40: ", precioMeno40);

const id2 = productos.find(p => p.id = 2);
console.log("Producto con ID 2: ", id2);