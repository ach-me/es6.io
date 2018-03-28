// Manejar reglas eslint desde el archivo

/* eslint-disable linebreak-style, no-unused-vars */
import { uniq } from 'lodash'; // named export entre {}
import insane from 'insane';
import jsonp from 'jsonp';

const ages = [1, 1, 4, 52, 12, 4];

console.log(uniq(ages));
