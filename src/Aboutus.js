import React from 'react'
import './aboutus.css'
import Navbar from'./Navbar'
import {FaFacebookSquare,FaInstagramSquare,FaTwitterSquare, } from "react-icons/fa"
function Aboutus() {
    return (
        <div className="aboutpage">
<Navbar/>
<h1 style={{textAlign: 'center',marginTop:'47px',color: 'rgb(255, 56, 92)',fontWeight:"600",letterSpacing:"1px",fontFamily:"'DM Sans', sans-serif"}}>ABOUT US</h1>

            <div class="container1">
          
  <div class="card card0">
    <div class="border">
      <h2>Vishnu Mallela</h2>

      <div class="icons">
      
        <i class="fa fa-instagram" aria-hidden="true"><FaFacebookSquare/></i>
        <i class="fa fa-twitter" aria-hidden="true"><FaTwitterSquare/></i>
        <i class="fa fa-facebook" aria-hidden="true"><FaInstagramSquare/></i>
      </div>
    </div>
   
  </div>

  <div class="card card1">
    <div class="border">
      <h2>Sid</h2>
      <div class="icons">
      <i class="fa fa-instagram" aria-hidden="true"><FaFacebookSquare/></i>
        <i class="fa fa-twitter" aria-hidden="true"><FaTwitterSquare/></i>
        <i class="fa fa-facebook" aria-hidden="true"><FaInstagramSquare/></i>
   
      </div>
    </div>
  </div>
  <div class="card card2">
    <div class="border">
      <h2>Hruditha Punugoti</h2>
      <div class="icons">
      <i class="fa fa-instagram" aria-hidden="true"><FaFacebookSquare/></i>
        <i class="fa fa-twitter" aria-hidden="true"><FaTwitterSquare/></i>
        <i class="fa fa-facebook" aria-hidden="true"><FaInstagramSquare/></i>
    
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Aboutus
