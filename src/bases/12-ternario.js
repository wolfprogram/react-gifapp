const active = true;

// let mensaje = '';

// if ( !active ) {
//     mensaje = 'Inactive';
// }else {
//     mensaje = 'Active';
// }

// console.log(mensaje);

// const mensaje = ( active === true ) ? 'Active' : 'Inactive';
// const mensaje = ( active ) ? 'Active' : 'Inactive';

// when yoou only wanna return true 
// const mensaje = ( active ) ? 'Active' : null;
const mensaje = ( active ) && 'Active';
//******Explain with and in Javascript  if firts is flase all is false*/
console.log(false && 'hola mundo');  // false
console.log(true && 'hola mundo');   // hola mundo


console.log(mensaje);