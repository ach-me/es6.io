import slug from 'slug'; // paquete npm
import base64 from 'base-64';
import { url } from './config'; // archivo local

export default function User(name, email, website) {
  return {
    name,
    email,
    website
  };
}

export function createURL(name) {
  return `${url}/users/${slug(name)}`;
}

export function gravatar(email) {
  const hash = base64.encode(email);
  const photoURL = `https://gravatar.com/avatar/${hash}`;
  return photoURL;
}
