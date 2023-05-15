import React from 'react'
import './login.css'
import Facebook from '../../image/facebooklogo.png'
import GitHub from '../../image/githublogo.png'
import Google from '../../image/googlelogo.png'

const Login = () => {
  return (
    <div className='login'>
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton facebook">
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton google">
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton github">
            <img src={GitHub} alt="" className="icon" />
            GitHub
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login