import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import {useState,useEffect} from 'react'
import{fireauth} from './Firebase'
import axios from 'axios'




function Chat() {
    const[user,setuser]=useState()
    const[loading,setloading]=useState(true)


    const getfile=async(url)=>{
        const response =await fetch(url);
        const data = await response.blob()
        return new File([data],"userphoto.jpg",{type:"image/jpeg"})


    }
    useEffect(() => {
      fireauth.onAuthStateChanged((user)=>{
          setuser(user)
          axios.get("https://api.chatengine.io/users/me",{headers:{"project-id":'ab87861d-f59c-4546-a488-cddc6ddf4013',"user-name":user.email,"user-secret":user.uid,}})
          .then(()=>setloading(false))
          .catch(()=>{
              let formdata = new FormData()
              formdata.append('username',user.email);
              formdata.append('secret',user.uid)
              getfile(user.photoURL).then((avatar)=>{
                  formdata.append('avatar',avatar,avatar.name)
                  axios.post('https://api.chatengine.io/users/',formdata,{headers:{"PRIVATE-KEY":'82281c3d-312f-46a0-b477-86250ecbbf72'}}).then(()=>setloading(false)).catch((error)=>console.log(error))
              })

          })






      })
}, [])



    return (
        <div>
            {!loading?<div>
                <ChatEngine
			height='100vh'
			userName={user.email}
            userSecret={user.uid}
			projectID='ab87861d-f59c-4546-a488-cddc6ddf4013'
		/>

            </div>:<div>...Loading</div>}
       
        </div>
    )
}


export default Chat
