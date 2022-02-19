const heroes = [
// export const heroes = [
// export default  [  // does´t ned a name
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// export const owners = ['DC', 'Marvel']; //other export
const owners = ['DC', 'Marvel']; //other export

// export default heroes; //defaul expor

export {
    heroes as default,
    owners
};