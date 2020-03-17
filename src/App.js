import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import TopAlbums from './components/TopAlbums'


function App() {
  return (
    <div>
        <HashRouter>
          <Navbar />
            <Switch>
                <Route path ='/' component={TopAlbums} />
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
