import React, { Component } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Box from "../Box/Box";
import Courses from "../Courses/Courses";
import Responses from "../Responses/Responses";
import Footer from "../Footer/Footer";


export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="Home">
          <h1>Ready to Fast Track your Journey?</h1>
          <h2>Go ahead with AHEN...</h2>
        </div>
        <Box />
      <Services />
      <Courses />
      <Responses />
      <Footer />
      </div>
    );
  }
}

export default Home;
