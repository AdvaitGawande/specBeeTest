import React, { useState } from 'react';
const Header=()=> {
    return (
        <>
      <div className="topnav" id="myTopnav">
        <a href="#">
          <img style={{ width: "30px", height: "30px" }} src="logo192.png"></img>
        </a>
        <a href="#">
          Advait Gawande
        </a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
        <a href="#">
          <i class="fa fa-bell"></i>
        </a>
        <a href="#">
          <i class="fa fa-search"></i>
        </a>

        </div>
        <div  className="topnav1" >
          <div className="dropdown">
            <button onclick="myFunction()" className="dropbtn"><i class="fa  fa-bars"></i></button>
            <div id="myDropdown" className="dropdown-content">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div style={{ float: 'right' , marginTop:'10px'}}>
          <a className="btn btn-outline-primary"><i className="fa fa-file-o"></i> New</a>
          <a className="btn btn-outline-primary"><i className="fa fa-eye"></i> View</a>
          <a className="btn btn-outline-primary"><i className="fa fa-print"></i> Print</a>
          <a className="btn btn-outline-primary"><i className="fa fa-trash"></i> Delete</a>
          <a className="btn btn-outline-primary"><i className="fa fa-clipboard"></i> Save as draft</a>
          <a className="btn btn-primary"><i className="fa fa-location-arrow"></i> Submit</a>
        </div>

      </div>
    </>
    );
}

export default Header;