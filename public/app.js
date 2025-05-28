import * as calc from './calculadora.js';


document.addEventListener('DOMContentLoaded', () => {
  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');
  const operacion = document.getElementById('operacion');
  const calcular = document.getElementById('calcular');
  const resultado = document.getElementById('resultado');

  calcular.addEventListener('click', () => {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    let res;

    switch (operacion.value) {
      case 'sumar':
        res = calc.sumar(a, b);
        break;
      case 'restar':
        res = calc.restar(a, b);
        break;
      case 'multiplicar':
        res = calc.multiplicar(a, b);
        break;
      case 'dividir':
        res = b !== 0 ? calc.dividir(a, b) : 'Error: división por cero';
        break;
      default:
        res = 'Operación no válida';
    }

    resultado.textContent = res;
  });
});
