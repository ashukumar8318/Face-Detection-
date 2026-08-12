import React ,{useState}from 'react'
import "../style/login.scss"
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
const Login = () => {

  const{user,loading,handleLogin} = useAuth()
   const navigate = useNavigate()

  const [email, setemail] = useState("") 
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
 

   async function submitHandler(e) {
      e.preventDefault();
      console.log("LoggedIn")
      await handleLogin({username,email,password})
      navigate("/")
    }
  return (
  <div className="login-page">

    <div className="login-card">

      <div className="login-header">
        <h1>Welcome Back</h1>
        <p>Login to your account</p>
      </div>

      <form onSubmit={submitHandler} className="login-form">

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input value={username} onChange={(e)=>setusername(e.target.value)}
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input value={email} onChange={(e)=>setemail(e.target.value)}
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e)=>setpassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
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
