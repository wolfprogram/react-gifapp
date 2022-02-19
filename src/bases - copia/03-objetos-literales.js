// Objetos Literales, tambien conocidos como diccionarios
const person= {
    firstName: 'Mike',
    lastName: 'Power',
    age: 36,
    address: {
      city: 'San Francisco',
      zip: '940',
      latitude: -90,
      length: 10
    }
  };
  let { name, age } = person;
  console.log(age);
  
  // console.log({person:person});
  console.log({person})
  
  console.table({person}) 
  
  // In this case we are copy only memory reference
  // let person2 = person
  // person2.firstName = 'Hugo'
  
  let person3 = {...person}
  person3.firstName = 'Jesus'
  
  // For that reason when change firstName in person2 the  firstName in person Change
  console.log(person)
  // console.log(person2)
  console.log(person3)
  
  // the corrent way is using spread operator, I´m using this in person3    