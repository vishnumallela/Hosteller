import React from 'react'
import {db} from './Firebase'
import{useEffect,useState}  from 'react'
import {useHistory} from 'react-router-dom'
import {FcFullTrash } from 'react-icons/fc';
import{GrFormRefresh} from 'react-icons/gr'
import './Adminportal.css'



function AdminPortal() {
    const history = useHistory()
const[admin,setadmin]=useState("")
const[list,setList]=useState()
const[refresh,setrefresh]=useState(false)

useEffect(async () => {

const formlist=[]
await db.collection("FORMDATA").get().then((snapshot)=>{
    snapshot.docs.forEach((doc) => {
        let currentID = doc.id
        let appObj = {...doc.data(), 'id': currentID }
        formlist.push(appObj)
     

})})
console.log(formlist)
setList(formlist)



setadmin(localStorage.getItem("ADMIN"))
},[refresh])




    return (
        <div style={{width:'100%',height:'100vh'}}>
       {!admin?(<><div style={{width:"100vw",height:"100vh",display:"flex",alignItems:'center',justifyContent:'center'}}><h1 style={{color:'gray',fontSize:'20px'}}>...Loading</h1></div></>):(<> 
     
        <div  style={{backgroundColor: 'black',height:'6vh',textAlign: 'center',color: 'white',display: 'flex',justifyContent: 'center',alignItems: 'center',}}><h1 style={{fontSize:"20px",marginBottom:"0px"}}>Made with<span style={{ color: 'red'}} > ❤ </span> for Vitians!</h1></div>
<div style={{width:'100%',display: 'flex',justifyContent: 'center',alignItems: 'center',marginTop:'5px'}}>

<div>
   {
list.map((item,index)=>{

    return(<>
    <div style={{display:'flex',width:'561px',justifyContent: 'space-between',borderRadius:'15px',backgroundColor:'#E4EBF5',padding:'14px'}}>

   <p>{item.NAME}</p>
   <p>{item.BDETAILS}</p>
   <p>{item.PHONE}</p>
   
<p className="deletebutton" onClick={async()=>{



if (window.confirm("Do you really want to Remove the Ticket?")){

    await db.collection("FORMDATA").doc(item.id).delete();
    setList(list.filter((doc,index)=>doc.id!==item.id))}
    else{
        console.log("delete aborted")
    }





}} style={{cursor:'pointer'}}><FcFullTrash/></p>

</div>

   </> )


})



}
</div>

</div>


























<button onClick={(e)=>{localStorage.removeItem("ADMIN")
history.push('/')}}>Logout</button>


     
       
       
       </>)}

  
       </div>
    )
}

export default AdminPortal
