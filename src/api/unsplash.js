import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    
    headers: {
        Authorization:
         'Client-ID Avwl0eUgYFOlEzDCtQqggVVH6EcWziOv7b6h26fePE4' 
     }
});


 