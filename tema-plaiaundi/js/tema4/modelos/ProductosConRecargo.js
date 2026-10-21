import {Producto} from "./Productos.js";

export class ProductoConRecargo extends Producto {
    constructor(id, nombre, precio) {
        super(id, nombre, precio);
    }

    calcularValorStock(){
        const valor = super.calcularValorStock();
        return valor*1.10;
    }
}