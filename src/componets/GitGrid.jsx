import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GitGridItem from './GitGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import GitImage from './GitImage';
export const GitGrid = ({category}) => {

  // const [images, setImages] = useState([]);

  const { data:images, loading} = useFetchGifs(category);

  // useEffect(() => {
  //   // getGifs();
  //   // console.log( category);
  //   getGifs( category )
    
  //   // // .then(cualtquiernombre => setImages(cualtquiernombre))
  //   .then(setImages);
    
  // }, [])
  


//   const getGifs = async () => {
     

//     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&key=qTZpivKAMxCGrieMKa1CpH9oSKI9L8O9`
     
//     const resp = await fetch( url );
//     // const resp = await axios.get( url );
//     const { data } = await resp.json();  
//     // const  {data}  = await resp.data;


//     const gifs = data.map( (img) => {
//       return{
//         id:img.id,
//         title:img.title,
//         url:img.images?.downsized_medium.url

//       }
//     }) 
//     // console.log(data);
//     // console.log( gifs );

//     setImages( gifs );
//     // return gifs;
// }
  

// getGifs();

  return (
    <>
    <h3> { category } </h3>

    { loading && <p>Loading...</p>}

    <div>
        
        
        {
          images.map( (img) => 
                  <GitGridItem 
                  key={img.id}
                  {...img}
                  />
                   // <li key={ id } >{ title }</li>
                    
                     
                  )
        }
          
       
    </div>
    </>
  )
}

