import { expect } from 'chai';
import { operar } from '../src/main.js';


describe('QA Integracion', ()=>{
	it('Sumar', ()=>{
		expect(operar('sumar', 4, 4)).to.equal(8);
	});
});