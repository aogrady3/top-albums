import React from 'react'
import { connect } from 'react-redux'
import { getTopAlbums } from '../reducers/albums'
import  Album  from './Album'
import './TopAlbums.css'


class TopAlbums extends React.Component {
    componentDidMount() {
        this.props.getTopAlbums()
    }

    render() {
        const albums = this.props.albums
        let count = 0
        return (
            <div className='all-albums'>
                {albums.map(album => {
                    count++
                    return <Album key={count} album={album} count={count}/>
                })}
            </div>

        )
    }
}

const mapState = (state) => ({
    albums: state.albums.all
})

const mapDisptach = (dispatch) => ({
    getTopAlbums: () => dispatch(getTopAlbums())
})

export default connect(mapState, mapDisptach)(TopAlbums)