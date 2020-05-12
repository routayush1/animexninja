const axios = require('axios')

const ListDispatcher = async (type , page)=> {

    let url = `https://anime-x.herokuapp.com/popular/${page}`
    let data = []
    let res= await axios.get(url)
    data = res.data.results
    return{
        type,
        payload :{data , page}
    }
}

const SearchAction =async (query , page)=> {

    let url = `https://anime-x.herokuapp.com/search/${query}/${page}`
    let data = []
    let res= await axios.get(url)
    data = res.data.results
    return {
        type: "SEARCH",
        payload : {
            data , page
        }
    }
}

export {ListDispatcher, SearchAction} ;