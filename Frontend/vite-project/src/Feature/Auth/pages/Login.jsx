import React from 'react'
import "../style/login.scss"
import { Link } from 'react-router-dom'
const Login = () => {

   function submitHandler(e) {
      e.preventDefault();
      console.log("LoggedIn")

    }
  return (
  <div className="login-page">

    <div className="login-card">

      <div className="login-header">
        <h1>Welcome Back</h1>
        <p>Login to your account</p>
      </div>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="login-form">

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            autocomplete="username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            autocomplete="current-password"
            required
          />
        </div>

        <div className="form-options">
          <label className="remember">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>

          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>

      </form>

      <p className="signup-text">
        Don't have an account?
        <Link to="/Register">Sign up</Link>
        
      </p>

    </div>

  </div>


  )
}

export default Login
