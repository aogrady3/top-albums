import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import TopAlbums from './components/TopAlbums'
import Favorites from './components/Favorites'
import SingleAlbum from './components/SingleAlbum'


function App() {
  return (
    <div>
        <HashRouter>
          <Navbar />
            <Switch>
                <Route exact path ='/favorites' component={Favorites} /> 
                <Route exact path = '/album/:albumName' render={(routeProps) => <SingleAlbum routeProps={routeProps} />} />
                <Route path ='/' component={TopAlbums} />
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
