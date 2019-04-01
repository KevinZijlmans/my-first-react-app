import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import LightSwitch from './components/LightSwitch'
import UserBoard from './components/UserBoard'
import User from './components/User'

class App extends Component {
  state = ['Kevin','Bob','Fred']
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Codaisseur
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <main>
          <Title content='This is my Title' />
          <LightSwitch />
          <UserBoard names={this.state} />
          <User names={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
