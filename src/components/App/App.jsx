import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';

function App() {

  return (
    <div className='App'>
      <Router>


        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      <Route exact path='/'>
        <Feeling />
      </Route>
      <Route exact path='/understanding'>
        <Understanding />
      </Route>
      <Route exact path='/support'>
      </Route>
      <Route exact path='/comments'>
      </Route>
      <Route exact path='/review'>
      </Route>
      <Route exact path='/thankyou'>
      </Route>
    </Router>
    </div>
  );
}

export default App;
