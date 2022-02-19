const nombre = 'Mike';
let apellido = 'vol';

// let nombreCompleto = nombre + ' '  + apellido 
let nombreCompleto = `${ nombre } ${ apellido }`
let nombreCompleto1 = `
${ nombre }
${ apellido }
${ 1*3 }
`
function getSaludo1() {
    return 'Hola Mundo'
}

export function getSaludo(nombre = 'NombreDefault') {
    return 'Hola ' + nombre 
}


// console.log(nombreCompleto)
// console.log(nombreCompleto1)
// console.log(`Esto es un texto ${ getSaludo(nombre) }`)