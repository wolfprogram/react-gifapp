// https://stackabuse.com/making-asynchronous-http-requests-in-javascript-with-axios/
// import axios from 'axios';

import axios from 'axios'


let myid = 4280
const sendRequest = async () => {
    try {
        const resp = await axios({
            method: 'GET',
            url: `https://api.jikan.moe/v4/anime/${myid}`,
            // data: {
            //     id: 1,
            //     userId: 1,
            //     title: 'A new title',
            //     body: 'Update this post'
            // }
        });

        // console.log(resp.data);
        const  {image_url}  = resp.data.data.images.jpg;
        console.log(image_url);
        const img = document.createElement('img');
        img.src = image_url;
        document.body.append( img );
    } catch (err) {
        // Handle Error Here
        console.error(err);
        
    }
}

sendRequest();


// let img = ''
// let data = []
// const peticion1 = axios.get(`https://api.jikan.moe/v4/anime/${myid}`);


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


///////////////////////////////////////////////
// const getPostsData = () => {
//     axios
//     .get(`https://api.jikan.moe/v4/anime/${myid}`)
//     .then(({ data })=> console.log(data.data.images))
//     .then (img= data.data.images)
//     .then(console.log(img))
//     .catch(error => console.log(error));
//   };
//  getPostsData();


// const getPostsData = () => {
//     axios
//     .get(`https://api.jikan.moe/v4/anime/${myid}`)
//     .then ( ({ data }) => {
//         // console.log(data)
//         const { image_url } = data.images.jpg;
//         console.log(image_url)

//         const img = document.createElement('img');
//         img.src = image_url;

//         document.body.append( img )
//     })
//     .catch(error => console.log(error));
// };
// getPostsData();


// const peticion = fetch(`https://api.jikan.moe/v4/anime/${myid}`);

// peticion
//     .then ( resp => resp.json() )
//     .then ( ({ data }) => {
//         // console.log(data)
//         const { image_url } = data.images.jpg;
//         console.log(data)
//         console.log(image_url)

//         const img = document.createElement('img');
//         img.src = image_url;

//         document.body.append( img );

//     })
//     .catch ( console.warn )