import React from 'react'
import logo from'./logo.png'
function Navbar() {
    return (
        <div style={{width:'100%',position:'inherit',height:"6vh",backgroundColor:'black',boxShadow:'0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',display:'flex',justifyContent:'start',alignItems:'center',zIndex:15}}>
            <img style={{height:'33px', marginLeft:'20px',}}src={logo}/>
        </div>
    )
}

export default Navbar
