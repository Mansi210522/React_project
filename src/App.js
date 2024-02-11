import './App.css';
import React, { Component } from 'react'
import Home from './components/Home/Home';

import Login from './components/Login/login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



export default class App extends Component {
  render() {


    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
