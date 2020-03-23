import React from 'react'
import {Link} from 'react-router-dom';


import './Album.css'

class Album extends React.Component {
    render() {
        const { album, count, addFavoriteAlbum, showButton, removeFavoriteAlbum} = this.props
    return (
        <div className ='album'>
           <Link to={`/album/${album.id.attributes[`im:id`]}`}> 
                <img src={album[`im:image`][2].label} alt={'Album Artwork'} /> 
            </Link>
            <div className='album-description' >
                <div className ='album-title'>{count}. {album[`im:name`].label}</div>
                <div className ='album-artist'>{album[`im:artist`].label}</div> 
            </div> 
            {showButton ? 
            <div className = 'favorite-button'>
                <button className ='btn' onClick={() => addFavoriteAlbum(album)}><i className="fa fa-heart-o"></i></button>
            </div> :
            <div className = 'favorite-button'>
            <button className ='btn' onClick={() => removeFavoriteAlbum(album)}><i className="fa fa-heart"></i></button>
        </div> 
        }              
        </div>  
)}
}


export default Album