import axios from 'axios'

/**
 * Action
 */

 const GET_TOP_ALBUMS = 'GET_TOP_ALBUMS'


/**
 * Action Creator
 */

const gotTopAlbums = (albums) => ({
    type: GET_TOP_ALBUMS,
    albums
})

/**
 * Thunk
 */
export const getTopAlbums = () => {
    return async (dispatch) => {
        const {data} = await axios.get('https://itunes.apple.com/us/rss/topalbums/limit=107/json')
        console.log('THUNK');
        const topAlbums = data.feed.entry
        console.log(topAlbums)
        dispatch(gotTopAlbums(topAlbums))
    }
}

/**
 * Inital State
 */
const intialState = {
    all: []
}

 /**
 * Reducer
 */
const albumReducer = (state = intialState, action) => {
    switch(action.type) {
        case GET_TOP_ALBUMS:
            return {...state, all: action.albums}
        default:
            return state
    }
}

export default albumReducer;