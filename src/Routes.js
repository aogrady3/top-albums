import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import TopAlbums from './components/TopAlbums'


class Routes extends React.Component{
    render() {
        return (
        <HashRouter>
            <Switch>
                <Route path ='/' component={TopAlbums} />
            </Switch>
        </HashRouter>
        )
    }
}

export default Routes