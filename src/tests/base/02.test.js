import { getSaludo } from "../../bases/02-template-string";
import '@testing-library/jest-dom';

describe('Pruebas en 02', () => { 
    test('getSaludo debe de retornar hola + variable', () => { 
        const nombre = 'mike';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre );	
     }) 

     //Si no hay argumento en el nombre debe de retornal const saludo = getSaludo( nombre );

    test('Si no hay argumento en el nombre debe de retornal NombreDefault', () => { 
        
        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola ' + 'NombreDefault')

    })   

 })
 