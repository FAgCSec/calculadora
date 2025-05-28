/**
 * Suma dos números.
 */
export function sumar(a, b) {
  return a + b;
}

/**
 * Resta dos números.
 */
export function restar(a, b) {
  return a - b;
}

/**
 * Divide dos números.
 * Lanza error si se intenta dividir por cero.
 */
export function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

/**
 * Multiplica dos números.
 */
export function multiplicar(a, b) {
  return a * b;
}

/**
 * Retorna el módulo (residuo) de la división.
 */
export function modulo(a, b) {
  return a % b;
}

/**
 * Alias de `modulo`, puedes eliminar si no se necesita.
 */
export function moduloDos(a, b) {
  return a % b;
}
