// Importar metodos del modulo lodash
import { sum, kebabCase } from 'npm:lodash';
import { addTax } from './checkout';

console.log(kebabCase('Boca capo'));
console.log(addTax(100, 0.15));