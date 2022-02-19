// import { heroes } from './data/heroes'

// import { heroes, owners } from "./data/heroes";
// import  heroes, { owners } from "./data/heroes";
import  heroes, { owners } from "../data/heroes";

// import heroes, { owners } from "./data/heroes"; // This is when i have default export

// import { heroes } from "./data/heroes";
// import  loquesea  from "./data/heroes";  // name wathever word you want,this export is no recoment becase isn´t no clear
// import {heroes} from './data/heroes';

// console.log(heroes)
// console.log( owners )

// const getHeroesById = (id) => {
//     return heroes.find((heroe) => {
//         if (heroe.id === id) {
//             return true
//         }else {
//             return false
//         }
//     });
// };


// you can use () in funtion arg or no (heroe)
export const getHeroesById = (id) => heroes.find( (heroe) => heroe.id === id );
// const getHeroesById = (id) => heroes.find( heroe => heroe.id === id );

// console.log(getHeroesById(1));

export const getHeroesByOwner = ( owner ) =>  heroes.filter( (heroe) => heroe.owner === owner );
// console.log(getHeroesByOwner('Marvel'));
// console.log(getHeroesByOwner('DC'));