import './login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input 
          className="loginInput"
          type="text" 
          placeholder="Enter your email..." 
        />
        <label>Password</label>
        <input 
          className="loginInput"
          type="password" 
          placeholder="Enter your password..." 
        />
        <button className="loginButton">Login</button>
      </form>
      <Link to='/register' className="loginRegisterButton link">Register</Link>
      {/* <button className="loginRegisterButton">Register</button> */}
    </div>
  )
}

export default Login