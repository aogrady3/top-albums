import React from 'react'
import { connect } from 'react-redux'
import { getTopAlbums } from '../reducers/albums'


class TopAlbums extends React.Component {
    componentDidMount() {
        this.props.getTopAlbums()
    }

    render() {
        return (
            <div>
                Place Holder
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