const personajes = ['Goku', 'Vegeta', 'Trunks']

const [a]  = personajes
const [,b]  = personajes
const [,,c]  = personajes

console.log(c)

export const returnArray = () => (['ABA', 153]);

const [l, n] = returnArray();
console.log(l, n)

const auseState = (valor) => 
    ( [ valor, ()=>{console.log('Hola Mundo')}])

// const arr = auseState ( 'Goku' );
// const [nombre, setNombre] = arr
// arr[1]();
// console.log(arr);

const [nombre, setNombre] = auseState ( 'Goku' );


console.log( nombre );
setNombre();

