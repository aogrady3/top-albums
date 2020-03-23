import React from 'react'
import { connect } from 'react-redux'
import { getSingleAlbum } from '../reducers/albums'
import { isEmpty } from '../utility/utility'
import './SingleAlbum.css'

class SingleAlbum extends React.Component {
    componentDidMount() {
        const albumId = this.props.routeProps.match.params.albumId
        this.props.getSingleAlbum(albumId)
    }

    render() {
       const album = this.props.album
       console.log(album)
       if(!isEmpty(album)) {
           return (
            <div>
            <div className = 'full-album'>
                <div className = 'container'>
                    <img src={album[`im:image`][2].label} alt='Artwork'/>
                </div>
                <div className = 'container'>
                    <h2>{album[`im:name`].label}</h2>
                    <h3>{album[`im:artist`].label}</h3>
                </div>
            </div>
            <div className ='album-details'>
                <h4>{album[`im:itemCount`].label}: Songs</h4>
                <h4>{album.category.attributes.term}</h4>
                <h4>{album[`im:releaseDate`].attributes.label}</h4>
                <h4>{album.rights.label}</h4>

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
})

const mapDispatch = (dispatch) => ({
    getSingleAlbum: (albumId) => dispatch(getSingleAlbum(albumId)),
})

export default connect(mapState, mapDispatch)(SingleAlbum)