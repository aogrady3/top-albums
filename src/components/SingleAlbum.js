import React from 'react'
import { connect } from 'react-redux'
import { getSingleAlbum } from '../reducers/albums'
import { isEmpty } from '../utility/utility'

import './SingleAlbum.css'

class SingleAlbum extends React.Component {
    componentDidMount() {
        const albumName = this.props.routeProps.match.params.albumName
        this.props.getSingleAlbum(albumName)
    }

    render() {
       const album = this.props.album
       console.log(album)
       if(!isEmpty(album)) {
           return (
            <div className = 'full-album'>
            {this.props.album[`im:name`].label}
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
    getSingleAlbum: (albumName) => dispatch(getSingleAlbum(albumName)),
})

export default connect(mapState, mapDispatch)(SingleAlbum)