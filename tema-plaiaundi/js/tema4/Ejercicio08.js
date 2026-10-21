
import { catalogo } from './data/datos.js';

import {
    obtenerNombres,
    obtenerDisponibles,
    buscarPorId,
    calcularValorStock,
    obtenerNombresDisponibles
} from './logica/catalogo.js';

console.log('Nombres:', obtenerNombres(catalogo));

console.log('Disponibles:', obtenerDisponibles(catalogo));

console.log('Producto con ID:', buscarPorId(catalogo, 99));

console.log('Valor del stock:', calcularValorStock(catalogo));

console.log(
    'Nombres disponibles:',
    obtenerNombresDisponibles(catalogo)
);
