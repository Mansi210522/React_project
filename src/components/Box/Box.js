import React, { Component } from 'react'
import './Box.css';

const Box = () => {
  const handleMouseOver = (boxId) => {
    const box = document.getElementById(boxId);
    box.classList.add('blinking');
  };

  const handleMouseOut = (boxId) => {
    const box = document.getElementById(boxId);
    box.classList.remove('blinking');
  };

  return (
    <div className="container">
      <div
        id="boxA"
        className="box"
        onMouseOver={() => handleMouseOver('boxA')}
        onMouseOut={() => handleMouseOut('boxA')}
      >
         Drivers / Learners License
      </div>
      <div
        id="boxB"
        className="box"
        onMouseOver={() => handleMouseOver('boxB')}
        onMouseOut={() => handleMouseOut('boxB')}
      >
        Driving School
      </div>
      <div
        id="boxC"
        className="box"
        onMouseOver={() => handleMouseOver('boxC')}
        onMouseOut={() => handleMouseOut('boxC')}
      >
        Test/ Appointment
      </div>
      <div
        id="boxD"
        className="box"
        onMouseOver={() => handleMouseOver('boxD')}
        onMouseOut={() => handleMouseOut('boxD')}
      >
        Other Services
      </div>
    </div>
  );
};

export default Box;
