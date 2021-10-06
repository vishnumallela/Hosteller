import React from 'react'
import { useSelector } from 'react-redux'
import{useState,useEffect} from 'react'
import{db} from './Firebase'
import './roomatefind.css'
import logo from './logo.png'

  
function Roomatefind() {
    const user =useSelector((state)=>state.roomuser.value)
    const[checked,setchecked]=useState()
    const[list,setlist]=useState([])
    const[load,setload]=useState(false)

  

    useEffect(async () => {
      const formlist=[]
  let localcheck= localStorage.getItem('checked')
  console.log(localcheck)
  setchecked(JSON.parse(localcheck))
  await db.collection('ROOMATEREQUEST').get().then((snapshot)=>{
    snapshot.docs.forEach((doc) => {
      let currentID = doc.id
      let appObj = {...doc.data(), 'id': currentID }
      formlist.push(appObj)
    })},[])

    setlist(formlist)
 }, [load])


   console.log(list)


const handleclick= async()=>{
        const localitem=localStorage.getItem('checked')
        if(localitem==='true'){
            console.log("already clicked")
            localStorage.setItem('checked',false)
            var delete_query = db.collection('ROOMATEREQUEST').where('name','==',user.displayName);
            await delete_query.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
            doc.ref.delete();
          }); });
         setload(!load)
      
    }else{
            localStorage.setItem('checked',true)
            await db.collection('ROOMATEREQUEST').add({name:user.displayName,photo:user.photoURL})
            setload(!load)
         

        }


    }





    return (
       <div style={{width:"100%",height:"100vh",display:'flex',flexDirection:'column'}}>
       
         <div style={{width:'100%',position:'inherit',height:"6vh",backgroundColor:'orange',boxShadow:'0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',display:'flex',justifyContent:'start',alignItems:'center',zIndex:15}}>
            <img style={{height:'33px', marginLeft:'20px',}}src={logo}/>
        </div>
     
     <div>
     <label class="switch">
            <input type="checkbox" defaultChecked={checked} onClick={handleclick}/>
            <span class="slider round"></span>
            </label>

     </div>
     <div style={{width:"100%",height:"80vh",display:"flex",marginTop:'20px',padding:"10px"}}>
     
      {list?.map((item)=>{
        return (<>
        <div style={{backgroundColor:"orange",height:"168px",width:"170px",borderRadius:"8px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginRight:'10px'}}>
          <h1 style={{fontSize:"16px",marginTop:"10px",color:"white",fontWeight:"500"}}>{item.name}</h1>
          <img src={item.photo} style={{objectFit:"contain",flex:1,height:"51px",width:"109px",borderRadius:"50p%"}}/>



        </div>

        </>)
      })}
      
     
     </div>
   
  

         








        </div>
)}

export default Roomatefind
