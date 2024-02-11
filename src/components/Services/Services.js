

import React, {Component} from 'react';
import './Services.css';

const Services = () => {
  return (

    <section id="services">
      <h2>Our Services</h2>
      <p>
      
      </p>   
    
      <div className="services-list">
        <div className="service">
          <img src="https://images.pexels.com/photos/8552644/pexels-photo-8552644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="web design" />
          <h3>Customizable Driving Lessons</h3>
          <p>
          Tailor your driving experience with lessons that adapt to your pace, schedule, and individual needs.
          </p>
        </div>
        <div className="service">
          <img src="https://images.pexels.com/photos/8943081/pexels-photo-8943081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="web development" />
          <h3>Experienced Instructors</h3>
          <p>
          Learn from seasoned professionals who bring a wealth of knowledge and expertise to your driving education.
          </p>
        </div>
        <div className="service">
          <img src="https://images.pexels.com/photos/6913726/pexels-photo-6913726.jpeg?auto=compress&cs=tinysrgb&w=600" alt="seo" />
          <h3>Practice Tests</h3>
          <p>
          Hone your skills and boost your confidence with comprehensive practice tests, ensuring you're well-prepared for the real thing.
          </p>
        </div>
        <div className="service">
          <img src="https://images.pexels.com/photos/2265487/pexels-photo-2265487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="seo" />
          <h3>Effortless licence process</h3>
          <p>
          Navigate the licensing process smoothly, thanks to our streamlined and user-friendly procedures.
          </p>
        </div>
        <div className="service">
          <img src="https://images.pexels.com/photos/5717854/pexels-photo-5717854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mobile app development" />
          <h3>30 days Money Back Guaurantee</h3>
          <p>
          Enjoy peace of mind with our risk-free commitment – if you're not satisfied within 30 days, we'll refund your investment.
          </p>
        </div>
        <div className="service">
          <img src="https://images.pexels.com/photos/314374/pexels-photo-314374.jpeg?auto=compress&cs=tinysrgb&w=600" alt="seo" />
          <h3>Pick And Drop</h3>
          <p>
          Convenience at your doorstep – benefit from hassle-free pick-up and drop-off services for your driving lessons.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;