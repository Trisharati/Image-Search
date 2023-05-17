import axios from 'axios'
const SearchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',
    {
        headers:{
        Authorization : 'Client-ID ynRy1JvDA2OO2jM5iOAZG4R4QYci8bIYV-atequ07po'
    
    },
    
        params : {
            query : term
        }
    })
    // console.log(response);
    return response.data.results
}
export default SearchImage