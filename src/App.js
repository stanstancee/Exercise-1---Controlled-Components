import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
   text:""
  }
 handleChange = (event)=>{
   let value = event.target.value;
   this.setState((prev)=>{
    return{
      text: value
    }
   })
 }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" value={this.state.text} placeholder="Say Something" onChange={this.handleChange} />
          <p className="echo">Echo:</p>
          <p>{this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default App;
