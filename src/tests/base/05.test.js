import '@testing-library/jest-dom';

import { getActiveUser, getUser } from "../../bases/05-funciones";


describe('Pruebas en 05 funciones', () => { 
    test('getUser debe de retornar un objeto', () => { 
        const userTest = {
            uid: 'ABCD',
            username: 'test'
        }

        const user = getUser();
        // console.log(getUser)
        // {} === {}
        // expect(user).toBe( userTest );
        expect(user).toStrictEqual( userTest );
        // expect(user).toEqual( userTest );

     })

     test('getUsuario debe de retornar un objeto', () => { 
        // const useP = 'Wolf'
        const nombre= 'Mike';
        const activeUserTest = {
            uid: 'ABCDee',
            username: nombre
        }

        // const activeUser = getActiveUser(useP);
        
        // expect(activeUser).toStrictEqual( activeUserTest );
        // expect(user).toEqual( userTest );

        // const nombre= 'Mike';
        const user = getActiveUser(nombre);

        expect(user).toEqual( {
            uid: 'ABCDee',
            username: nombre
        } );
         
      })
 })