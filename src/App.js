
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import loading from './components/Loading'
export default class App extends Component {
  render() {
    return (
      <div>
        
        <NavBar/>
        <div className="text-center my-3">
          <h1>NewsMonkey-Top Headlines</h1>

        </div>
        <loading/>
        
        <News/>
      </div>
    )
  }
}
