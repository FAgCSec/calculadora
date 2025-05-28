import * as calc from '../src/calculadora.js'
/**
 * Función que recibe una operación y dos números,
 * y ejecuta la función correspondiente de la calculadora.
 */
export function operar(op, a, b) {
  switch (op) {
    case 'sumar':
      return calc.sumar(a, b);
    case 'restar':
      return calc.restar(a, b);
    case 'multiplicar':
      return calc.multiplicar(a, b);
    case 'dividir':
      if (b === 0) throw new Error("No se puede dividir por cero");
      return calc.dividir(a, b);
    default:
      throw new Error("Operación no válida");
  }
}
