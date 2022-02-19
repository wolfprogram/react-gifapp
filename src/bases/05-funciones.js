//Funtions in JavaScript

//  function saludar ( name ) {
//      return `Hola, ${name}`;
//  }; 


// const  saludar = function( name ) {
//      return `Hola, ${name}`;
//  }; 


// function arrow normal
// const saludar= (name) => {return `Hola, ${name}`};

// function arrow simple
const saludar= (name) => `Hola, ${name}`;

const saludar2 = () => `Hola Mundo`;
///

//  console.log(saludar('Mike'));
// console.log(saludar('Mike8 '));
// console.log(saludar2('Mike8 '));

// const getUser = () => {
//     return {
//         uid: 'ABCD',
//         username: 'test'
//     };
// };


export const getUser = () => 
     ({
        uid: 'ABCD',
        username: 'test'
    });

const User = getUser();    
// function getActiveUser(name) {
//     return {
//         uid: 'ABCDee',
//         username: name
//     };
// };

export const getActiveUser = (name) => ({uid: 'ABCDee', username: name});
const ActiveUser = getActiveUser('MikePower')

// console.log(User);
// console.log(ActiveUser);


 