/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 12 · || frente a ??
 */
console.log("0");
const cantidad = undefined;
const a = cantidad || 10;
const b = cantidad ?? 10;
console.log(a);
console.log(b);