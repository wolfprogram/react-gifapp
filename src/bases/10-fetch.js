
const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';

// const peticion = fetch(`https://www.etnassoft.com/api/v1/get/?id=589&callback=?`);
let myid = 12

const peticion = fetch(`https://api.jikan.moe/v4/anime/${myid}`);



// peticion.then( resp => {
//     resp.json().then ( data => {
//         console.log(data)
//     })
// })


peticion
    .then ( resp => resp.json() )
    .then ( ({ data }) => {
        // console.log(data)
        const { image_url } = data.images.jpg;
        console.log(image_url)

        const img = document.createElement('img');
        img.src = image_url;

        document.body.append( img );

    })
    .catch ( console.warn )

// peticion
//     .then (resp => { resp.json() })
//     // .then (({ data }) => {
//     .then ( data  => {
//         console.log(data)
//     })
//     .catch ( console.warn )

// peticion
//     .then( resp => resp.json() )
//     .then( ({ data }) => {
//         const { url } = data.images.original;
        
//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img );


//     })
//     .catch( console.warn );




// // const peticion = fetch(`https://www.etnassoft.com/api/v1/get/?id=589&callback=?`);
// let myid = 30
// const peticion1 = fetch(`https://axoltlapi.herokuapp.com/`);

// peticion1

//     .then ( resp => resp.json() )
//     .then ( ({ data }) => {
//         // console.log(data)
//         const image_url = data.url
//         console.log(image_url)

//         const img = document.createElement('img');
//         img.src = image_url;

//         document.body.append( img );

//     })
//     .catch ( console.warn )