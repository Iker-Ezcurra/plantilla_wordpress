
const primerDescuento={
    titulo: "a",
    saldo: 30,
    descripcion(){
        return `${this.titulo}: ${this.saldo} €`;
    }
}

const segundoDescuento={
    titulo: "b",
    saldo: 15,
}

segundoDescuento.descripcion = primerDescuento.descripcion;

console.log(primerDescuento.descripcion());

console.log(segundoDescuento.descripcion());