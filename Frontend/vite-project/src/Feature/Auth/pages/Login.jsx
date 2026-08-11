import React from 'react'
import "../style/login.scss"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
 
  <div class="login-page">

    <div class="login-card">

      <div class="login-header">
        <h1>Welcome Back</h1>
        <p>Login to your account</p>
      </div>

      <form class="login-form">

        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            autocomplete="username"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            autocomplete="current-password"
            required
          />
        </div>

        <div class="form-options">
          <label class="remember">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>

          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" class="login-btn">
          Login
        </button>

      </form>

      <p class="signup-text">
        Don't have an account?
        <Link to="/Register">Sign up</Link>
        
      </p>

    </div>

  </div>


  )
}

export default Login
