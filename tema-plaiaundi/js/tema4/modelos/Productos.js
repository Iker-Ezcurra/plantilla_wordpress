export class Producto{
    #stock;
    constructor(id, nombre, precio){
        this.id = id,
        this.nombre = nombre,
        this.precio = precio
    }

    get stock(){
        return this.#stock
    }

    set stock(valor){
        if(!Number.isFinite(valor) || valor<0){
            throw new RangeError("Stock no válido");
        }
        this.#stock = valor;
    }

    calcularValorStock(){
        return this.#stock * this.precio;
    }
}