//Desestructuración
//Asignación Desestruturación

// const { useContext } = require("react");

const person = {
    name: 'Mike',
    age: 3,
    clave: 'Mar',
    range: 'Soldado',  // if property exit use this valor if not use default as

};

// console.log(person.name);
// console.log(person.age);
// console.log(person.clave);

// const {name:name2, age, clave} = person;

// console.log(name2);
// console.log(age);
// console.log(clave);


// const returnPerson = (personx) => {console.log(personx)};

// The range value if exit in object person then use this value, otherwise use 
//default value asig in const returnPerson  'Capi'

/////////
// const returnPerson = ({name:name2, age, range='Capi', clave}) => {
//     console.log(name2, age, clave, range)};

// returnPerson(person);
/////////

// const returnPerson = ({name:name2, age, range='Capi', clave}) => ({
//     nombreClave:clave, year:age});

// const returnPerson = ({name:name2, age, range='Capi', clave}) => {
//     return {nombreClave:clave, 
//     year:age};
// }

const auseContext = ({name:name2, age, range='Capi', clave}) => 
    ({nombreClave:clave, 
    years:age,
    latlog: {
        lat: 1022222,
        log: 20
    }
    });



// const avenger = auseContext(person);

// const { nombreClave, years } = avenger

// const { nombreClave, years, latlog } = auseContext(person);
// const { lat, long } = latlog;

const { nombreClave, years, latlog:{lat, long} } = auseContext(person);



// console.log(avenger)
console.log(nombreClave, years);
// console.log(latlog);
console.log(lat)


