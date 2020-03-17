import React from 'react'
import './Album.css'

const Album = ({ album, count }) => {
    return (
        <div className ='album'>
            <img src={album[`im:image`][2].label} alt={'Album Artwork'}/>
            <div className='album-description'>
                <div>{count}. {album[`im:name`].label}</div>
                <div>{album[`im:artist`].label}</div>
            </div>                
        </div>
    )
}

export default Album