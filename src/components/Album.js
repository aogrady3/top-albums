import React from 'react'

import './Album.css'

const Album = ({album, count, addFavoriteAlbum, showButton, removeFavoriteAlbum }) => { 
    return (
        <div className ='album'>
            <img src={album[`im:image`][2].label} alt={'Album Artwork'}/>
            <div className='album-description'>
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

export default Album