
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

    vender(unidades){
        if(!Number.isFinite(unidades) || unidades<0){
            console.log("Numero no válido");
            return false;
        } else if (unidades>this.#stock){
            console.log("Stock insuficiente");
            return false;
        }
        return true;
    }

    estaDisponible(){
        if(this.#stock>0){
            console.log("Esta disponible");
        } else {
            console.log("No esta disponible");
        }
    }

    calcularValorStock(unidades){
        if(this.vender(unidades)){
            this.#stock-=unidades;
        }
    }
}

const teclado = new Producto(1,"Teclado", 35)
teclado.stock=8;
teclado.calcularValorStock(5);
console.log(teclado.stock);
