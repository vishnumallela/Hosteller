import React from 'react'
import {fireauth} from './Firebase'
import {useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
import logo from './user.png'
import IDCARD from './Idcard'
import Navbar from'./Navbar'
import './Home.css'
import clean from './clean.svg'
import menu from './menu.svg'
import chat from './chat.svg'
import roomate from './roomate.svg'

function Home() {


    let history=useHistory()
 const [user,setUser]=useState("")
 const[avatar,setAvatar]=useState("")
useEffect(() =>{
   fireauth.onAuthStateChanged((user)=>{
       if(user.displayName){
     setUser(user.displayName)
    setAvatar(user.photoURL)}else{
         setUser(user.phoneNumber)
         setAvatar(logo)
     }
   
    })
})



    return (
        <div>
       <IDCARD img={avatar} name={user}/>
    <Navbar/>
            <div className="back" style={{width:'100%',height:'94vh',backgroundColor:'black'}}>
                <div className="homenav"  style={{width:'100%',height:'90vh',display:'flex',alignItems: 'center',justifyContent: 'center',flexDirection:'column'}}>
                    <div className="navitem"  onClick={()=>history.push('/roomcleaning')} style={{width:"360px",height:'200px',overflow:'hidden',display:'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'start'}}>
                        <img src={clean} style={{objectFit:'contain',height:'170px',width:'55%',bottom:'10px'}}/>
                        <p style={{position:'absolute' ,marginTop:'5px',color:'white'}}>ROOM CLEAN UP</p>
                    </div>

                    <div className="navitem" onClick={()=>history.push('/menu')} style={{width:"360px",height:'200px',overflow:'hidden',display:'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'start'}}>
                        <img src={menu} style={{objectFit:'contain',height:'170px',width:'55%',bottom:'10px'}}/>
                        <p style={{position:'absolute' ,marginTop:'5px',color:'white'}}>FOOD MENU</p>
                    </div>
                    <div className="navitem" onClick={()=>history.push('/chat')} style={{width:"360px",height:'200px',overflow:'hidden',display:'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'start'}}>
                        <img src={chat} style={{objectFit:'contain',height:'170px',width:'55%',bottom:'10px'}}/>
                        <p style={{position:'absolute' ,marginTop:'5px',color:'white'}}>VIT CHAT</p>
                    </div>
                    <div className="navitem" onClick={()=>history.push('/findroomate')} style={{width:"360px",height:'200px',overflow:'hidden',display:'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'start'}}>
                        <img src={roomate} style={{objectFit:'contain',height:'170px',width:'55%',bottom:'10px'}}/>
                        <p style={{position:'absolute' ,marginTop:'5px',color:'white'}}>FIND ROOMATE</p>
                    </div>


              

                    
                    
                </div>
            <button className="btn-3" onClick={()=>{fireauth.signOut()}}>SignOut</button>
         
            </div>

        </div>


    )
}

export default Home
