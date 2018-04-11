import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import News from './components/news';
import Navbar from './components/customNavbar.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/news" component={News}/>
        </div>
      </Router>
    );
  }
}

export default App;
