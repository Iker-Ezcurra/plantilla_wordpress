import {Producto} from "./Productos.js";

export class ProductoConRecargo extends Producto {
    constructor(id, nombre, precio, stock) {
        super(id, nombre, precio, stock);
    }

    calcularValorStock(){
        const valor = super.calcularValorStock();
        return valor*1.10;
    }
}