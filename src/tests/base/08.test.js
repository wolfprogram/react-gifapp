import { getHeroesById, getHeroesByOwner } from "../../bases/08-import-export";
import heroes from "../../data/heroes";


describe('Pruebas de funciones de Héroes', () => { 
    test('Debe retornar un heroe por id', () => { 
        const id = 1;
        const heroe = getHeroesById(id);

        const heroeData = heroes.find( (h) => h.id === id );

        expect(heroe).toEqual(heroeData);
        console.log(heroe);
     })
    test('deber de retornar un undefined si Héroe no existe', () => { 
        const id = 10;
        const heroe = getHeroesById(id);

        expect(heroe).toBe(undefined);
      
     })

    test('debe de retornar un areglo con los Héroes de DC', async () => { 
        const owner = 'DC';
        const HeroesByOwner = getHeroesByOwner( owner );
        const heroeOwnerData = heroes.filter( (h) => h.owner === owner );
        
        expect(HeroesByOwner).toEqual(heroeOwnerData);
    })  

    test('debe de retornar un areglo con los Héroes de Marvel', async () => { 
        const owner = 'Marvel';
        const HeroesByOwner = getHeroesByOwner( owner );
        const heroeOwnerData = heroes.filter( (h) => h.owner === owner );
        
        
        expect(HeroesByOwner).toEqual(heroeOwnerData);
        expect(HeroesByOwner.length).toBe(2)
    })    
 })