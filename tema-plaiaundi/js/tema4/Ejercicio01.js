
const libro = {
    titulo: "Mi libro luna de Pluton",
    precio: 12,
    unidades: 5,
    calcularImporte(){
        return  (this.precio * this.unidades);
    }
};

console.log(libro.calcularImporte());