import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { CssBaseline, Box, Container, Typography } from '@mui/material';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';

function App() {

  return (
    <div className='App'>
      <CssBaseline />
      <Router>
        <Box className='App-header'>
          <Typography variant="h2" gutterBottom className='App-title'>Feedback!</Typography>
          <Typography variant="subtitle1" gutterBottom >Don't forget it!</Typography>
        </Box>
      <Route exact path='/'>
        <Feeling />
      </Route>
      <Route exact path='/understanding'>
        <Understanding />
      </Route>
      <Route exact path='/support'>
        <Support />
      </Route>
      <Route exact path='/comments'>
        <Comments />
      </Route>
      <Route exact path='/review'>
        <Review />
      </Route>
      <Route exact path='/thankyou'>
        <ThankYou />
      </Route>
    </Router>
    </div>
  );
}

export default App;
