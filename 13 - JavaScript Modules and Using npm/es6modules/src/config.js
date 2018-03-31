const apiKey = 'Default Export';

// Como hacer para acceder a esta variable desde otro archivo o modulo?
// Para que esta variable esté disponible hay que exportalar. Hay dos maneras

// 1) Export default
// Cuando se importa, se puede usar cualquier nombre
// Solo se puede declarar un solo export default
export default apiKey;

// 2) Named export
// Al importala, se debe usar el mismo nombre con que se declaro
// Se pueden utilizar multiples named export
export const key = 'Named Export';
export const url = 'http://www.wesbos.com';
export function sayHi(name) {
  console.log(`Hello there ${name}`);
}

const one = 100;
const two = 200;

export { one as age, two };

