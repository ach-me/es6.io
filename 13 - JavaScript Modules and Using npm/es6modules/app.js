// Manejar reglas eslint desde el archivo

/* eslint-disable linebreak-style, no-unused-vars */
import { uniq } from 'lodash'; // las named export van entre {}
import insane from 'insane';
import jsonp from 'jsonp';
// Para acceder a la variable declarada en config.js hay que importarla
// Como no es un modulo node, es un archivo, hay que indicar la ubicacion del archivo
// Como se utilizo una exportacion default, se puede usar cualquier nombre al importarla
// import lalala from './src/config';
// Named export y Export Default
// En named export se puede cambiar el nombre: { name as otroNombre }
import lala, { key as otroNombre, url, sayHi, age, two } from './src/config';
import User, { createURL, gravatar } from './src/user';

const wes = new User('Wes Bos', 'wesbos@gmail.com', 'wesbos.com');
const profile = createURL(wes.name);
const image = gravatar(wes.email);
console.log(profile);
console.log(image);
