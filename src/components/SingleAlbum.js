import React from 'react'
import { connect } from 'react-redux'
import { getSingleAlbum } from '../reducers/albums'
import { isEmpty } from '../utility/utility'
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
       console.log(album)
       if(!isEmpty(album)) {
           return (
            <div>
            <div className = 'full-album'>
                <div className = 'container'>
                    <img src={album[`im:image`][2].label} alt='Artwork'/>
                </div>
                <div className = 'container' style={{width: `25%`}}>
                    <div className= 'full-album-title'>{album[`im:name`].label}</div>
                        <div className= 'full-album-artist'>
                                {album[`im:artist`].label} 
                                <button onClick={() => this.handleClick(album)} >View on Apple Music</button>
                        </div>
                    <div className='album-item'>{album.category.attributes.term}</div>
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
})

const mapDispatch = (dispatch) => ({
    getSingleAlbum: (albumId) => dispatch(getSingleAlbum(albumId)),
})

export default connect(mapState, mapDispatch)(SingleAlbum)