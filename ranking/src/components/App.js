import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from '../containers/Header'
import List from '../containers/List'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div className="App-intro">
      <Header />
      <List />
    </div>
  </div>
)

export default App
