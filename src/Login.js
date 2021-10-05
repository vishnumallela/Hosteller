import React from 'react';
import {useHistory} from 'react-router-dom'
import { StyledFirebaseAuth } from 'react-firebaseui'
import {fireauth} from './Firebase'
import firebase from 'firebase';
import './login.css'
import background from './13027.jpg'
import { FcBusinessman } from "react-icons/fc"
import logo from'./logo.png'
import{useState} from 'react'
import{HiMenuAlt2} from 'react-icons/hi'
import{RiCloseCircleFill} from 'react-icons/ri'



function Login() {

const[isopen,setisopen]=useState(false)

  const history = useHistory()
    const uiConfig = {
      
        signInFlow: 'popup',

     
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          
        ],
      };






    return (
        <div className="Login" style={{height:"100vh",width:"100%",position:'relative'}}>

          <div  style={{backgroundColor: 'black',height:'7vh',textAlign: 'center',color: 'white',display: 'flex',justifyContent: 'space-around',alignItems: 'center',position:'relative'}}>
          <HiMenuAlt2 onClick={()=>setisopen(!isopen)} style={{objectFit:'contain',position:'absolute',left:'15px',cursor:'pointer'}}/>
           <img src={logo} className="logo" style={{objectFit:'contain',height:'160px',width:'160px'}}/> 
          
     
           

            <h1 style={{fontSize:"20px",marginBottom:"0px",fontFamily:'Cubano',}}>Made with<span style={{ color: 'red'}} > ❤ </span> for Vitians!</h1>
            </div>

          <div style={{width:"100%",height:"20vh",marginTop:"85px",textAlign: 'center'}} >
               <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fireauth} />
               <p style={{color: 'gray',opacity:"80%"}}>------or------</p>
               <button className="adminbtn" style={{marginTop:"10px",textDecoration:"none",border:"none",padding:"12px 63px" ,borderRadius:"5px",backgroundColor:" #FFDC00",fontWeight:"500",cursor:'pointer',fontFamily:'Cubano'}} onClick={()=>{history.push("/adminlogin")}}><FcBusinessman style={{display:'inline-block,',position:'absolute',marginLeft:'-45px',height:'1.2rem',width:'2rem',}}/>  Sign in as Admin</button>
               
               </div>
               
               <div className={isopen?"open":"close"} style={{height:'100vh',width:'15vw',backgroundColor:'rgb(255, 220, 0)',position:'absolute',zIndex:'20',top:'0px',display:'flex',flexDirection:'column',alignItems:'center'}}>

<RiCloseCircleFill className="closebtn" onClick={()=>setisopen(!isopen)} style={{alignSelf:'center',marginRight:'10px',marginTop:'10px',marginBottom:'10px'}} fill="blue"/>

<div className="sidenav" style={{height:"100%",width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
  <h1 onClick={()=>history.push('/aboutus')} style={{fontSize:'15px',marginTop:"10px",fontWeight:'700',cursor:"pointer",borderBottom:'2px solid white'}}>ABOUT CREATORS</h1>
  <h1 onClick={()=>history.push('/policy')} style={{fontSize:'15px',marginTop:"10px",fontWeight:'700',cursor:"pointer",borderBottom:'2px solid white'}}>PRIVACY POLICY</h1>



</div>

               </div>
               
        </div>
    )
}

export default Login
