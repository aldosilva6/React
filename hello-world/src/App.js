import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBinding from './components/EventBinding'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
          {/*<Greet />
          <Welcome />*/}
        </p>
          <EventBinding />
        {/*
                  <Greet name="Kevin"  heroName="Wonder Woman"/>
        <Counter />
        <Welcome name="Aldo" heroName="Superman"/>
        <FunctionClick />
        <ClassClick />
          <Hello/>
          <Message />
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Aldo" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Kevin"  heroName="Wonder Woman"/>
        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Aldo" heroName="Superman"/>
        <Welcome name="Kevin"  heroName="Wonder Woman"/>*/}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
