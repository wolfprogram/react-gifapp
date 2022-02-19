import axios from 'axios'

export const getGifs = async (category) => {
     

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&key=qTZpivKAMxCGrieMKa1CpH9oSKI9L8O9`
     
    // const resp = await fetch( url );
    const resp = await axios.get( url );
    // const { data } = await resp.json();  
    const  {data}  = await resp.data;


    const gifs = data.map( (img) => {
      return{
        id:img.id,
        title:img.title,
        url:img.images?.downsized_medium.url

      }
    }) 
    // console.log(data);
    // console.log( gifs );

    // setImages( gifs );
    return gifs;
}


// export const getGifs = async( category ) => {

//     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&key=qTZpivKAMxCGrieMKa1CpH9oSKI9L8O9`;
//     const resp = await fetch( url );
//     const { data } = await resp.json();

//     const gifs = data.map( img => {
//         return {
//             id: img.id,
//             title: img.title,
//             url: img.images?.downsized_medium.url
//         }
//     })

//     return gifs;


// }