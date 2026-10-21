
import { Producto } from "./modelos/Productos.js";
import { ProductoConRecargo } from "./modelos/ProductosConRecargo.js";

const producto = new Producto(1, "producto", 30);
producto.stock=4;
console.log(producto.calcularValorStock());

const producto2 = new ProductoConRecargo(2, "producto", 15);
producto2.stock=8;
console.log(producto2.calcularValorStock());