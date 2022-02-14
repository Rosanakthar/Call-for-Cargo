import React, { useEffect, useState } from "react";
import './css/login.css'
import { Link } from "react-router-dom";

function Signup() {

    const [number,setNumber] = useState(' ');
    const [email,setEmail] = useState(' ');
    const [name,setName] = useState(' ');
    const [password,setPassword] = useState(' ');
    const [confirmpassword,setconfirmPassword] = useState(' ');
    const [bool,setBool] =useState(false);

    useEffect(()=>{
        // alert('hi');
    })
    const submitHandler = (event) =>{
        event.preventDefault();
        if(password != confirmpassword || number.length!=10 || password.length<5){
            alert("check all field")
        }
        else{
            alert("ok")
            
        }
    }
    let perr='';
    let Nerr='';
    let plerr='';
    console.log(bool);
    // if(password == confirmpassword && number.length==10 && password.length>5){
    //     setBool=true;
    // }
    if(password != confirmpassword){ 
        perr=<p><b className="text-danger">Password and Confirm Password not match</b></p>
    }
    if(number.length!=10){
        Nerr = <p><b className="text-danger">Enter Valide Mobile Number</b></p>
    }
    if(password.length<5){
        plerr=<p><b className="text-danger">Password length must be greater than 5</b></p>
    }
   
    return(
      // LOGIN Page 
        <div>
        <br /> <br /> <br /> <br /> 
        <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2><b>SIGNUP</b></h2>
            <div className="underline-title"></div>
          </div>
          <form onSubmit={submitHandler}>
          <label for="user-email">
                &nbsp;<b>Email</b>
            </label><br />
            <input id="user-email" className="form-content" type="email" name="email" onChange={(e) => setEmail(e.target.value)} autocomplete="on" required />
            <div className="form-border"></div><br />
            <label for="user-email">
                &nbsp;<b>Mobile Number</b>
            </label><br />
            <input id="user-email" className="form-content" type="tel" onChange={(e)=>setNumber(e.target.value)} name="email" autocomplete="on" required />
            <div className="form-border"></div>
            {Nerr}
            <label for="user-password">&nbsp;<b>Password</b>
              </label><br />
            <input id="user-password" className="form-content" type="password" onChange={(e)=>setPassword(e.target.value)} name="password" required />
            <div className="form-border"></div><br />
            {plerr}
            <label for="user-password">&nbsp;<b>Confirm Password</b>
              </label><br />
            <input id="user-password" className="form-content" type="password" onChange={(e)=>setconfirmPassword(e.target.value)} name="password" required />
            <div className="form-border"></div><br />
            {perr}
            <input id="submit-btn" type="submit"  name="submit"  value="SIGNUP"/><br />
            
           <Link to='/login'> <a id="signup"><b>Already have an account</b></a></Link>
          </form>
        </div>
      </div>
      <br /> <br /> <br /> <br /> 
        </div>
    )
} 

export default Signup;