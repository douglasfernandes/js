import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="App-title">ToDo App</h1>
        </header>
          <Todo/>
        </div>
    );
  }
}

export default App;
