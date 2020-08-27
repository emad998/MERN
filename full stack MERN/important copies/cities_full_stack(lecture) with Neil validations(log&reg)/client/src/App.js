import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Redirect, Link, navigate} from '@reach/router';
import axios from 'axios';

import AllCities from './views//AllCities';
import NewCity from './views/NewCity';
import SingleCity from './views/SingleCity';
import EditCity from './views/EditCity';
import Login from './views/Login';

// axios.interceptors.response.use(response => response, err => { 
//   navigate('/login');
//   return err
// });

function App() {
  return (
    <div className="App">
    <Link to="cities">All cities</Link>{' '}
    <Link to="/cities/new">Create a City</Link>
    <Router>
      <AllCities path='cities' />
      <NewCity path='cities/new' />
      <SingleCity path='cities/:id' />
      <EditCity path='cities/:id/edit' />
      <Login path="login" />
      <Redirect
      from='/'
      to='cities'
      noThrow
      />
      </Router>
    </div>
  );
}

export default App;
