import React from 'react'
import{useState,useEffect} from 'react'
import {db}from './Firebase'
import {useHistory} from 'react-router-dom'
import {update} from './redux/AdminSlice'
import {  useDispatch } from 'react-redux'
import './Adminlogin.css'
import logo from './logo.png'
import{RiLoginCircleFill,RiLockPasswordFill} from 'react-icons/ri'
import {GrUserAdmin} from 'react-icons/gr'

function Adminlogin() {

    const dispatch = useDispatch()
    const history = useHistory()

const[email,setemail]=useState("")
const[password,setpassword]=useState("")
const[admindata,setadmindata]=useState()


useEffect(async () => {
    const adminarray=[]
await db.collection("ADMINDATA").get().then((querySnapshot)=>{querySnapshot.forEach((doc)=>{
  let adminobject={...doc.data()}
  adminarray.push(adminobject)

})})
setadmindata(adminarray)

  
}, [])





const handlesubmit= (e)=>{
    e.preventDefault()
    console.log(email,password)
    
  
let credentials =admindata.filter((doc)=>doc.EMAIL===email && doc.PASSWORD===password)
console.log(credentials)
if(credentials.length>0){

    localStorage.setItem("ADMIN",email)
    history.push('/adminportal')
}else{
    alert("Please Enter Valid Credentials")
}


}

    return (
        <div style={{width:'100%',height:'100vh',backgroundColor:'#FF9000',display:'flex',alignItems: 'center',justifyContent: 'center'}}>
            <div className="admincontainer" style={{width:'360px'}}> 
            <div style={{height:'8vh',backgroundColor:'#03A9F4',borderRadius:'14px 14px 0px 0px',display:'flex',alignItems: 'center',justifyContent: 'center',flexDirection:'column'}}>
                <img src={logo} style={{objectFit:'contain',height:'42px',width:'200px',marginTop:'35px'}}/>
                <h1 style={{fontSize:'10px',fontWeight:'bold',color:'white'}}>Admin</h1>
            </div>
          

            <form onSubmit={handlesubmit} style={{marginTop:'10vh',textAlign:'center',position:'relative'}}>

<label><GrUserAdmin style={{display:'inline'}}/> <input type="text" id="user" value={email}placeholder="Username" onChange={(e)=>setemail(e.target.value)} style={{border: '1px solid black',borderRadius:'8px',padding:'5px 65px 5px 5px',height:'29px'}}/>  </label>
<label> <RiLockPasswordFill style={{display:'inline'}}/> <input type="password" id="pass" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password" style={{border: '1px solid black',borderRadius:'8px',padding:'5px 65px 5px 5px',marginTop:'5px',outline: 'none'}}/>    </label>

<button type="submit" className="lgnbtn"> <RiLoginCircleFill fill="blue" className="lgnsvg"/></button>

 </form>


        
        




            </div>



         



         




        </div>
    )
}

export default Adminlogin
