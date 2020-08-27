import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import Home from './Views/Home'
import Planets from "./Views/Planets"
import People from "./Views/People"
import Starships from './Views/Starships'

function App() {
  return (
    <div className="App">
     <Router>
      <Home default/>
      <Planets path="/planets/:id"/>
      <People path="/people/:id"/>
      <Starships path="/starships/:id"/>
     </Router>
      
      
    </div>
  );
}

export default App;
