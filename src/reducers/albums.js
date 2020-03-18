import axios from 'axios'

/**
 * Action
 */

 const GET_TOP_ALBUMS = 'GET_TOP_ALBUMS'
 const GET_FAVORITE_ALBUMS = 'GET_FAVORITE_ALBUMS'


/**
 * Action Creator
 */

const gotTopAlbums = (albums) => ({
    type: GET_TOP_ALBUMS,
    albums
})

const gotFavoriteAlbums = (albums) => ({
    type: GET_FAVORITE_ALBUMS,
    albums
})


/**
 * Thunk
 */
export const getTopAlbums = () => {
    return async (dispatch) => {
        const {data} = await axios.get('https://itunes.apple.com/us/rss/topalbums/limit=107/json')
        const topAlbums = data.feed.entry
        dispatch(gotTopAlbums(topAlbums))
    }
}

export const getFavoriteAlbums = () => {
    return async (dispatch) => {
        //Initialize local storage if first time!
    if (localStorage.getItem('favorites') === null) {
            localStorage.setItem('favorites', JSON.stringify([]));
        }
        const favorites = JSON.parse(localStorage.getItem('favorites'))
        dispatch(gotFavoriteAlbums(favorites))
    }
}

export const addFavoriteAlbum = (albumObj) => {
    return async (dispatch) => {
         //Initialize local storage if first time!
         if (localStorage.getItem('favorites') === null) {
            localStorage.setItem('favorites', JSON.stringify([]));
        }

        const favorites = JSON.parse(localStorage.getItem('favorites'))
        favorites.push(albumObj)
        localStorage.setItem('favorites', JSON.stringify(favorites));
        dispatch(getTopAlbums())
        dispatch(getFavoriteAlbums())

    }
}

/**
 * Inital State
 */
const intialState = {
    all: [],
    favorites: [],
}

 /**
 * Reducer
 */
const albumReducer = (state = intialState, action) => {
    switch(action.type) {
        case GET_TOP_ALBUMS:
            return {...state, all: action.albums}
        case GET_FAVORITE_ALBUMS:
            return {...state, favorites: action.albums}
        default:
            return state
    }
}

export default albumReducer;