import React from 'react'
import './App.css';
import Login from './screen/login';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Signup from './screen/signup';

function App() {
  return (
    <BrowserRouter>
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
         <Link to='/'> <a className="navbar-brand">Call for Cargo</a></Link>
        </div>
        <div className="navbar-collapse collapse navbar-right main-nav" id="navbar">
           <ul className="nav navbar-nav ">
            {/* <li id="sub"><a href="#products">Products &amp; Services</a></li>
            <li id="sub"><a href="#features">Features</a></li> */}
            <li id="sub"><a href="#about">About</a></li>
            <li id="sub"><a href="#faqs">FAQS</a></li>
          </ul>
          <form className="navbar-form navbar-right">            
          <Link to='/login'><button id="btn" className='sub'>
                <b>Login/signup</b></button></Link>
          </form>
          <div className="bottom-arrow"></div>
        </div>
      </div>
    </nav>
      <br /><br />
      <Routes>
        <Route path='/login'  element={<Login></Login>}></Route>
        <Route path='/signup'  element={<Signup></Signup>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
