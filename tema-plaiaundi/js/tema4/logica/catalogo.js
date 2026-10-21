
export function obtenerNombres(lista) {
    return lista.map(producto => producto.nombre);
}

export function obtenerDisponibles(lista) {
    return lista.filter(producto => producto.stock > 0);
}

export function buscarPorId(lista, id) {
    return lista.find(producto => producto.id === id);
}

export function calcularValorStock(lista) {
    return lista.reduce(
        (total, producto) => total + producto.calcularValorStock(),
        0
    );
}

export function obtenerNombresDisponibles(lista) {
    return obtenerNombres(obtenerDisponibles(lista));
}
