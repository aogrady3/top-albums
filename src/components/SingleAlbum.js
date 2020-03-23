import React from 'react'
import { connect } from 'react-redux'
import { getSingleAlbum, addFavoriteAlbum, removeFavoriteAlbum } from '../reducers/albums'
import { isEmpty, notInFavorites } from '../utility/utility'
import './SingleAlbum.css'

class SingleAlbum extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        const albumId = this.props.routeProps.match.params.albumId
        this.props.getSingleAlbum(albumId)
    }

    handleClick(album) {
        const url = album.link.attributes.href
        window.open(url)
    }

    render() {
       const album = this.props.album
       const favorites = this.props.favorites
       console.log(album)
       if(!isEmpty(album)) {
           return (
            <div>
            <div className = 'full-album'>
                <div className = 'container'>
                    <img src={album[`im:image`][2].label} alt='Artwork'/>
                </div>
                <div className = 'container' style={{width: `30%`}}>
                    <div className= 'full-album-title'>{album[`im:name`].label}</div>
                        <div className= 'full-album-artist'>
                            {album[`im:artist`].label} 
                        </div>
                    <div className='album-item'>{album.category.attributes.term}</div>
                    <div>
                                <button className ='full-btn'onClick={() => this.handleClick(album)} >View on Apple Music</button>
                            {notInFavorites(favorites, album) ? 
                                <button className ='full-btn green' onClick={() => this.props.addFavoriteAlbum(album)} >Add To Favorites</button> : 
                                <button className ='full-btn orange' onClick={() => this.props.removeFavoriteAlbum(album)}>Remove From Favorites</button>
                        }
                    </div>
                </div>
            </div>
            <hr />
            <div className='details-container'>
            <div className ='album-details'>
                <div className='album-item'><b>Release Date: </b>{album[`im:releaseDate`].attributes.label}</div>
                <div className='album-item'>{album[`im:itemCount`].label}: Song(s)</div>
                <div className='album-item'>{album[`im:price`].label}</div>
                <div className='album-item'>{album.rights.label}</div>
            </div>
            </div>
            </div>
           )
       } else {
           return (
               <div className = 'full-album' >
                   Page does not exisit
               </div>
           )
       }
    }
}

const mapState = (state) => ({
    album: state.albums.single,
    favorites: state.albums.favorites
})

const mapDispatch = (dispatch) => ({
    getSingleAlbum: (albumId) => dispatch(getSingleAlbum(albumId)),
    addFavoriteAlbum: (album) => dispatch(addFavoriteAlbum(album)),
    removeFavoriteAlbum: (album) => dispatch(removeFavoriteAlbum(album))
})

export default connect(mapState, mapDispatch)(SingleAlbum)