import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import Home from './pages/Home'
import Voting from "./pages/Voting";
import PastWinners from './pages/past_winners';
import PhotoAlbum from './pages/photo_alb';
import Navbare from './components/Navigation/Navbar';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbare />

        <div className = "content">
          <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            <Route exact path = "/voting">
                <Voting/>
            </Route>
            <Route exact path = "/past_winners">
                <PastWinners/>
            </Route>
            <Route exact path = "/photo_album">
                <PhotoAlbum/>
            </Route>

          </Switch>
    </div>
  </div></Router>
    
  );
}

export default App;
