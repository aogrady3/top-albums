import axios from 'axios'

/**
 * Action
 */

 const GET_TOP_ALBUMS = 'GET_TOP_ALBUMS'
 const GET_FAVORITE_ALBUMS = 'GET_FAVORITE_ALBUMS'
 const GET_SINGLE_ALBUM = 'GET_SINGLE_ALBUM'


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

const gotSingleAlbum = (album) => ({
    type: GET_SINGLE_ALBUM,
    album
})


/**
 * Thunk
 */
export const getTopAlbums = () => {
    return async (dispatch) => {
        const {data} = await axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
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

export const removeFavoriteAlbum = (albumObj) => {
    return async (dispatch) => {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        let newFavorites = favorites.filter(album => {
            return album[`im:name`].label !== albumObj[`im:name`].label
        })
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        dispatch(getTopAlbums())
        dispatch(getFavoriteAlbums())
    }
}

export const getSingleAlbum = (albumId) => {
    return async (dispatch) => {
        const {data} = await axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
        const allAlbums = data.feed.entry
        let album = allAlbums.filter(album => {
            return album.id.attributes[`im:id`] === albumId
        })
        dispatch(gotSingleAlbum(...album))
    }
}

/**
 * Inital State
 */
const intialState = {
    all: [],
    favorites: [],
    single: {}
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
        case GET_SINGLE_ALBUM:
            return {...state, single: action.album}
        default:
            return state
    }
}

export default albumReducer;