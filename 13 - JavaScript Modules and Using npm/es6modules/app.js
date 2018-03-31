// Manejar reglas eslint desde el archivo

/* eslint-disable linebreak-style, no-unused-vars */
import { uniq } from 'lodash'; // named export entre {}
import insane from 'insane';
import jsonp from 'jsonp';
// Para acceder a la variable declarada en config.js hay que importarla
// Como no es un modulo node, es un archivo, hay que indicar la ubicacion del archivo
// Como se utilizo una exportacion default, se puede usar cualquier nombre al importarla
import lalala from './src/config';
// Named export
import { key as otroNombre, url, sayHi, age, two } from './src/config';

console.log(lalala);
console.log(otroNombre);
sayHi('Nac');

const ages = [1, 1, 4, 52, 12, 4];

console.log(uniq(ages));
