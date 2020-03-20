import React from 'react'
import {Link} from 'react-router-dom';


import './Album.css'

class Album extends React.Component {
    render() {
        const { album, count, addFavoriteAlbum, showButton, removeFavoriteAlbum} = this.props
    return (
        <div className ='album'>
           <Link to={`/album/${album[`im:name`].label}`}> 
                <img src={album[`im:image`][2].label} alt={'Album Artwork'} /> 
            </Link>
            <div className='album-description' >
                <div>{count}. {album[`im:name`].label}</div>
                <div>{album[`im:artist`].label}</div>
            </div> 
            {showButton ? 
            <div className = 'favorite-button'>
                <button onClick={() => addFavoriteAlbum(album)}>Add to Favorites</button>
            </div> :
            <div className = 'favorite-button'>
            <button onClick={() => removeFavoriteAlbum(album)}>Remove</button>
        </div> 
        }              
        </div>  
)}
}


export default Album