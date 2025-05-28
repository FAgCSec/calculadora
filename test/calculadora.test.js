import { expect } from 'chai';
import * as calc from '../src/calculadora.js'

//pruebas unitarias

describe('calculadora', () => {
	describe('sumar 4 + 4 = 8', () =>{
		it('sumar 4 + 4 = 8', () => {
			expect(calc.sumar(4, 4)).to.equal(8);
		});
	});

	//crear pruebas unitarias para restar,
	//multiplciar y dividir

	describe('restar 4 - 3 = 1', () =>{
		it('restar 4 - 3 = 1', () => {
			expect(calc.restar(4, 3)).to.equal(1);
		});
	});

	describe('dividir 4 / 4 = 1', () =>{
		it('dividir 4 / 4 = 1', () => {
			expect(calc.dividir(4, 4)).to.equal(1);
		});
	});

	describe('dividir entrer cero 4 / 0 = null', () =>{
		it('dividir entrer cero 4 / 0 = null', () => {
			expect(calc.dividir(4, 4)).to.equal(1);
		});
	});

	describe('multiplicar 4 * 4 = 16', () =>{
		it('multiplicar 4 * 4 = 16', () => {
			expect(calc.multiplicar(4, 4)).to.equal(16);
		});
	});

});