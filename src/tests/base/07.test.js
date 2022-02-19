import { returnArray } from "../../bases/07-desestruturacion-arrays"


describe('Pruebas en desestruturación', () => { 
    test('Debe de retornar un string y un número', () => { 
        
        // const arr = returnArray();
        const [letrass, numeros] = returnArray();
        
        // expect( arr ).toEqual (['ABA', 153]);
        expect( letrass ).toBe ('ABA');
        expect( typeof letrass ).toBe ('string');
        expect( numeros ).toBe( 153 );
        expect( typeof numeros ).toBe ('number');
     })
 })