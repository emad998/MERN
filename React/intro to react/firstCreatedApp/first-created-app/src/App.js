import React from 'react';
import logo from './logo.svg';
import './App.css';
import FancyDiv from './components/FancyDiv';

function App() {
  const hobbies = ["Learn React", "Climb Mt Everest", "Run a Marathon", "Feed the dogs"];
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <p>Thing I need to do:</p>
      <ul>
        {hobbies.map(hobby => {
          return <li>{hobby}</li>
        })}
      </ul>
      <FancyDiv
        background='blue'
        border='2px dashed yellow'
        color='white'
      >
        some Lorem text
      </FancyDiv>
    </div>
  );
}

export default App;
