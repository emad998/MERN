import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router'
import Home from './Views/Home'

import Word from './Views/Word'
import Hello from './Views/Hello'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        
        
         <Word path="/:id"/>

         <Hello path="/:id2/:id3/:id4"/>
        
        
      </Router>
    </div>
  );
}

export default App;
