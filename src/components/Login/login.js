// login.js
import React from "react";
import "./Login.css";

const Login = () => {
  const handleSwitch = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("sign-up-mode");
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          {/* Login Form */}
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" class="social-icon">
              <i class="fab fa-google"></i>
              </a>
    
              <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </form>

          {/* Registration Form */}
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="input-field">
              <i className="fas fa-phone"></i>
              <input type="text" placeholder="Mobile Number" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign up" className="btn solid" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        {/* Left Panel */}
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Sign up and discover great things!</p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSwitch}>
              Sign up
            </button>
          </div>
        </div>

        {/* Right Panel (Login) */}
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Already have an account? Sign in!</p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleSwitch}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
