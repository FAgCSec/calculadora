import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';

describe('Pruebas funcionales con Selenium - Calculadora Web', function () {
  this.timeout(30000); // Aumenta el timeout para que no falle por carga lenta

  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000'); // Asegúrate de que esté corriendo el servidor web
  });

  after(async () => {
    await driver.quit();
  });

  async function realizarOperacion(num1, num2, operacionEsperada, valorEsperado) {
    const input1 = await driver.findElement(By.id('num1'));
    const input2 = await driver.findElement(By.id('num2'));
    const select = await driver.findElement(By.id('operacion'));
    const boton = await driver.findElement(By.id('calcular'));
    const resultado = By.id('resultado');

    await input1.clear();
    await input1.sendKeys(num1.toString());
    await input2.clear();
    await input2.sendKeys(num2.toString());
    await select.sendKeys(operacionEsperada);
    await boton.click();

    await driver.wait(until.elementLocated(resultado), 5000);
    const resultadoTexto = await driver.findElement(resultado).getText();
    expect(resultadoTexto).to.equal(valorEsperado.toString());
  }

  it('Debe sumar correctamente 4 + 4 = 8', async () => {
    await realizarOperacion(4, 4, 'Sumar', 8);
  });

  it('Debe restar correctamente 5 - 2 = 3', async () => {
    await realizarOperacion(5, 2, 'Restar', 3);
  });

  it('Debe multiplicar correctamente 3 * 3 = 9', async () => {
    await realizarOperacion(3, 3, 'Multiplicar', 9);
  });

  it('Debe dividir correctamente 10 / 2 = 5', async () => {
    await realizarOperacion(10, 2, 'Dividir', 5);
  });

  it('Debe manejar división por cero', async () => {
    const input1 = await driver.findElement(By.id('num1'));
    const input2 = await driver.findElement(By.id('num2'));
    const select = await driver.findElement(By.id('operacion'));
    const boton = await driver.findElement(By.id('calcular'));
    const resultado = By.id('resultado');

    await input1.clear();
    await input1.sendKeys('5');
    await input2.clear();
    await input2.sendKeys('0');
    await select.sendKeys('Dividir');
    await boton.click();

    await driver.wait(until.elementLocated(resultado), 5000);
    const resultadoTexto = await driver.findElement(resultado).getText();
    expect(resultadoTexto).to.include('Error');
  });
});
