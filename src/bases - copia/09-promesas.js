import { getHeroesById } from "./bases/08-import-export";



// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () =>  {
//         // Tarea
//         // importen el 
//         const anyname = getHeroesById(1);
//         // resolve( anyname );
//         reject( 'No se pudo encontrar el héroe' );
//     }, 2000 )

// });

// promesa.then( (anothername) => {   //anothername for good pratics use name heroe
//     console.log('heroe', anothername)
// })
// .catch( err => console.warn( err ) );



const getHeroeByIdAsync = (id) => {
    // const promesa = new Promise( (resolve, reject) => {
    return new Promise( (resolve, reject) => {
        // in uso **2


        setTimeout( () =>  {
            // Tarea
            // importen el 
            const anyname = getHeroesById( id );
            if ( anyname ) {
                resolve( anyname );
            }else{
                reject('No se pude encontrar el héroe')
            }
            
            // reject( 'No se pudo encontrar el héroe' );
        }, 2000 )

    });

    // return promesa;  En desuso **2

};

getHeroeByIdAsync(12)
    // .then( anyname1 => console.log('heroe', anyname1))
    .then(console.log)
    
    // .catch(err => console.warn(err))
    .catch( console.warn )


    // const getHeroeByIdAsync = ( id ) => {

    //     return new Promise( (resolve, reject) => {
    
    //         setTimeout( () =>  {
    //             // Tarea
    //             // importen el 
    //             const p1 = getHeroesById( id );
    //             if ( p1 ) {
    //                 resolve( p1 );
    //             } else {
    //                 reject( 'No se pudo encontrar el héroe' );
    //             }
    //         }, 2000 )
        
    //     });
    
    
    // }
    
    
    // getHeroeByIdAsync(1)
    //     .then( console.log )
    //     .catch( console.warn );