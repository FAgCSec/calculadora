import readline from 'readline';
import * as calc from './src/calculadora.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Calculadora");
console.log("1. Sumar");
console.log("2. Restar");
console.log("3. Multiplicar");
console.log("4. Dividir");

rl.question("Elige una opción (1 al 4): ", (opcion) => {
  rl.question("Ingresa el primer número: ", (num1) => {
    rl.question("Ingresa el segundo número: ", (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let resultado;

      try {
        switch (opcion) {
          case "1":
            resultado = calc.sumar(a, b);
            break;
          case "2":
            resultado = calc.restar(a, b);
            break;
          case "3":
            resultado = calc.multiplicar(a, b);
            break;
          case "4":
            resultado = calc.dividir(a, b);
            break;
          default:
            console.log("Opción no válida.");
            rl.close();
            return;
        }
        console.log(`Resultado: ${resultado}`);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }

      rl.close();
    });
  });
});
