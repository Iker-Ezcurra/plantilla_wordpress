
class Producto{
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

    estaDisponible(){
        if(this.#stock>0){
            console.log("Esta disponible");
        } else {
            console.log("No esta disponible");
        }
    }

    calcularValorStock(){
        return this.#stock * this.precio
    }
}

class ProductoConRecargo extends Producto {
    constructor(id, nombre, precio) {
        super(id, nombre, precio);
    }

    calcularValorStock(){
        const valor = super.calcularValorStock();
        return valor*1.10;
    }
}
let productos = [];


const teclado = new ProductoConRecargo(1,"Teclado", 10);
teclado.stock=2;
console.log(teclado.calcularValorStock());

const monitor = new Producto(2,"Monitor",35);
monitor.stock=4;
productos.push(monitor);

const raton = new ProductoConRecargo(3, "Raton", 10);
raton.stock=2;
productos.push(raton);

const valorTotal = productos.reduce((total, producto) =>{
    return total + producto.calcularValorStock();
}, 0);

console.log(valorTotal);