import React from "react";
import "./Navbar.css";


const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="image-container" >
          <img  className="LOGO-image-nav" src="LOGO.png" alt="My Image" />
        </div>
       
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a className="nav-link about">About us</a>
            </li>
            <li className="nav-item our-service">
              <a class="nav-link">Our Service</a>
            </li>
            <li className="nav-item case-studies">
              <a class="nav-link">Case studies</a>
            </li>
            <li className="nav-item press-release">
              <a class="nav-link">Press Release</a>
            </li>
            <li class="nav-item sign-up ">
            <button type="button" class="btn btn-light sign-up">Sign-Up</button>
            </li>
            <li class="nav-item ">
            <button type="button" class="btn sign-in" style={{color:"white",backgroundColor:"#8f246b",marginTop:"8px"}}>Sign-IN</button>
              
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
