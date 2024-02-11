import './App.css';
import React, { Component } from 'react'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Box from './components/Box/Box';
import Services from './components/Services/Services';
import Responses from './components/Responses/Responses';
import Courses from './components/Courses/Courses';
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
