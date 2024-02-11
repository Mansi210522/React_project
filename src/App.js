import './App.css';
import React, { Component } from 'react'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Box from './components/Box/Box';
import Services from './components/Services/Services';
import Responses from './components/Responses/Responses';
import Courses from './components/Courses/Courses';
import Login from './components/Login/login';



export default class App extends Component {
  render() {

    
    return (
      <div className="App">
        <Navbar />
        <Home/>
        <Box />
        <Services/>
        <Courses/>
        <Responses/>
        <Footer />
        <Login/>
      

      </div>
     
    )
  }
 }

