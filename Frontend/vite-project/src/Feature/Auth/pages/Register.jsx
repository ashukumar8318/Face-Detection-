import React,{useState} from 'react'
import "../style/register.scss"
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate()

  const{user,loading,handleRegister} = useAuth()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


 async function submitHandler(e){
  e.preventDefault()
 console.log("userRegisterred")
  await handleRegister({username,email,password})
  prompt("User register succesffuly")
  navigate("/login")


 }
 
  return (
    <div className="register-page">
      <div className="register-card">

        <div className="register-header">
          <h1>Create Account</h1>
          <p>Register to get started</p>
        </div>

        <form onSubmit={submitHandler} className="register-form">

           <div className="form-group">
            <label htmlFor="username">Username</label>

            <input value={username} onChange={(e)=>setUsername(e.target.value)}
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              autoComplete="username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input value={email} onChange={(e)=>setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input value={password} onChange={(e)=>setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              autoComplete="new-password"
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Create Account
          </button>

        </form>

        <p className="login-text">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </div>
  );

}

export default Register
