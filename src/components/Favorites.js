import React from 'react'
import { connect } from 'react-redux'
import { getFavoriteAlbums, removeFavoriteAlbum } from '../reducers/albums'
import  Album  from './Album'
import './Favorites.css'


class Favorites extends React.Component{

    componentDidMount() {
        this.props.getFavoriteAlbums()
    }

    render() {
        const favorites = this.props.favorites;
        let count = 0
        return (
            <div className='all-fav-albums'>
                {!this.props.favorites.length ? (
                    <h3>No Favorites Selected!</h3>
                ) : 
                <div className = 'all-albums'>
                {favorites.map(album => {
                    count++
                    return <Album 
                        key={count} 
                        album={album} 
                        count={count} 
                        showButton={false}
                        removeFavoriteAlbum={this.props.removeFavoriteAlbum}
                        />
                })}
                </div>}
            </div>
        )
    }
}

const mapState = (state) => {
    return ({
        favorites: state.albums.favorites
    })
}

const mapDispatch = (dispatch) => ({
    getFavoriteAlbums: () => dispatch(getFavoriteAlbums()), 
    removeFavoriteAlbum: (album) => dispatch(removeFavoriteAlbum(album))

})

export default connect(mapState, mapDispatch)(Favorites)