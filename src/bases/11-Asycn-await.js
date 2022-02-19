const { default: axios } = require("axios");

// with F E T C H
// const getImagen = async () => {
//     let myid = 1

//     const resp = await fetch(`https://api.jikan.moe/v4/anime/${myid}`);
//     const  {data}  = await resp.json();

//     console.log(data)
//     const { image_url } = await data.images.jpg;
//     console.log(image_url)
//     const img = document.createElement('img');
//     img.src = image_url;
//     document.body.append( img );

// }

// getImagen()


// whti A X I O S
const getImagen = async () => {
    let myid = 22
    try {
        const resp = await axios.get(`https://api.jikan.moe/v4/anime/${myid}`);
        const  {data}  = await resp.data

        console.log(data)
        // const { image_url } = await data.images.jpg;
        const { image_url } =  data.images.jpg;
        console.log(image_url)
        const img = document.createElement('img');
        img.src = image_url;
        document.body.append( img );
    }catch(error) { 
        //manejo del error 
        console.log(error);
    }
    

}

getImagen()



