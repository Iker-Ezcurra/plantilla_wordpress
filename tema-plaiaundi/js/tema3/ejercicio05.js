function obtenerNombres(lista){
    const nombres = lista.map(p=>p.nombre)
    return nombres;
}

function obtenerDisponibles(lista){
    const disponibles = lista.filter(p => p.stock>0);
    return disponibles;
}

function buscarPorID(lista, id){
    const buscar = lista.find(p=>p.id=id);
    return buscar;
}

function calcularValorStock(lista){}

function obtenerNombresDisponibles(lista){}

const catalogo = [
    { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
    { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
    { id: 3, nombre: "Monitor", precio: 180, stock: 2 },
    { id: 4, nombre: "Cable", precio: 8, stock: 10 }
  ];