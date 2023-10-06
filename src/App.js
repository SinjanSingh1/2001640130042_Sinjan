// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllTrains from './components/AllTrains';
import SingleTrain from './components/SingleTrain';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/trains/:trainId">
          <SingleTrain />
        </Route>
        <Route path="/trains">
          <AllTrains />
        </Route>
        <Route path="/">
          <div>Home Page</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

