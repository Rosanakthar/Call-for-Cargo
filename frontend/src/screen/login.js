import React from "react";
import './css/login.css'
import { Link } from "react-router-dom";

function Login() {
    return(
      // LOGIN Page 
        <div>
        <br /> <br /> <br /> <br /> 
        <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2><b>LOGIN</b></h2>
            <div className="underline-title"></div>
          </div>
          <form method="post" className="form" >
            <label for="user-email">
                &nbsp;<b>Mobile Number</b>
            </label>
            <input id="user-email" className="form-content" type="tel" name="email" autocomplete="on" required />
            <div className="form-border"></div>
            <label for="user-password">&nbsp;<b>Password</b>
              </label>
            <input id="user-password" className="form-content" type="password" name="password" required />
            <div className="form-border"></div>
            <a href="#">
              <legend id="forgot-pass"><b>Forgot password?</b></legend>
            </a>
            <input id="submit-btn" type="submit" name="submit" value="LOGIN" href="Logged in.html"/>
            
           <Link to='/signup'> <a id="signup"><b>Don't have account yet?</b></a></Link>
          </form>
        </div>
      </div>
      <br /> <br /> <br /> <br /> 
        </div>
        // <div></div>
    )
} 

export default Login;