import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';

function App() {

  return (
    <div className='App'>
      <Router>

      <Route path='/'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Feeling />
      </Route>

      <Route path='/understanding'>
      </Route>
      <Route path='/support'>
      </Route>
      <Route path='/comments'>
      </Route>
      <Route path='/review'>
      </Route>
      <Route path='/thankyou'>
      </Route>
    </Router>
    </div>
  );
}

export default App;
