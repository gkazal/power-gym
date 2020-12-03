import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeContainer from './Containers/HomeContainer'

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <HomeContainer></HomeContainer>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
