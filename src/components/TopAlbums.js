import React from 'react'
import { connect } from 'react-redux'
import { getTopAlbums, addFavoriteAlbum, getFavoriteAlbums } from '../reducers/albums'
import { notInFavorites } from '../utility/favorites'
import  Album  from './Album'
import './TopAlbums.css'


class TopAlbums extends React.Component {
    componentDidMount() {
        this.props.getTopAlbums()
        this.props.getFavoriteAlbums()
    }

    render() {
        const albums = this.props.albums
        const favorites = this.props.favorites
        let count = 0

        return (
            <div className='all-albums'>
                {albums.map(album => {
                    let showButton = notInFavorites(favorites, album)
                    count++
                    return <Album key={count} album={album} count={count} addFavoriteAlbum={this.props.addFavoriteAlbum} showButton={showButton}/>
                })}
            </div>
        )
    }
}

const mapState = (state) => ({
    albums: state.albums.all,
    favorites: state.albums.favorites
})

const mapDisptach = (dispatch) => ({
    getTopAlbums: () => dispatch(getTopAlbums()),
    addFavoriteAlbum: (album) => dispatch(addFavoriteAlbum(album)),
    getFavoriteAlbums: () => dispatch(getFavoriteAlbums())

})

export default connect(mapState, mapDisptach)(TopAlbums)