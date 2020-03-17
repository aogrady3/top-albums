import React from 'react'

const Album = ({ album, count }) => {
    return (
        <div className ='album'>
            <img src={album[`im:image`][2].label} alt={'Artwork'}/>
        </div>
    )
}

export default Album