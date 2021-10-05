import React from "react";
import './App.css';
import Adminlogin from'./Adminlogin'
import {Switch, Route,} from "react-router-dom";
import Login from './Login'
import Home from './Home' 
import {useState,useEffect} from 'react'
import { fireauth } from "./Firebase";
import Roomclean from './RoomClean'
import AdminPortal from './AdminPortal'
import aboutus from'./Aboutus'
import Thankyou from './Thankyou'
import Menu from './Menu'
import Chat from './Chat'
import Roomatefind from './Roomatefind'
import { useDispatch,useSelector} from 'react-redux'
import { login} from './redux/userSlice'


function App() {
  const dispatch = useDispatch()
  const [user,setuser]=useState(false)


useEffect(() => {
  fireauth.onAuthStateChanged((user)=>{
  if(user){
  setuser(user)
  dispatch(login(user))


}else{
setuser("")
}


  })
  
},[])




  return (

<div>

  {!user?(
  
  <Switch>
 <Route exact path="/" component={Login}/>
 <Route path="/adminlogin" component={Adminlogin}/>
 <Route path="/adminportal" component={AdminPortal}  />
 <Route path="/aboutus" component={aboutus}/>

  </Switch>
  
  
  
  
  ):(<Switch>  
<Route exact path="/" component={Home}/>
<Route  path="/roomcleaning" component={Roomclean}/>
<Route path="/menu" component={Menu}/>
<Route  path="/thankyou" component={Thankyou}/>
<Route path="/chat" component={Chat}/>
<Route path="/findroomate" component={Roomatefind}/>
</Switch>
  )}






 

</div>





   
  );
}
export default App;
