import React from 'react'
import './Form.css'
import 'react-notifications-component/dist/theme.css'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import {useState,useEffect} from 'react'
import {db} from './Firebase'
import emailjs from 'emailjs-com';
import axios from 'axios'
import qs from 'qs'
import {useHistory} from 'react-router-dom'
import {RiSendPlaneFill} from 'react-icons/ri'
import vit from'./vit.png'
import ScrollAnimation from 'react-animate-on-scroll';








function Form() {
 
const history = useHistory()

const[name,setname]=useState("")
const[reg,setreg]=useState("")
const[phone,setphone]=useState("")
const[bdetails,setbdetails]=useState("")
const[cleaner,setcleaner]=useState()

 const handlesend= async (e)=>{

      e.preventDefault()
      var d = new Date();



//cleaner.no fetching from firebase

          const phonenumarray=[]
await db.collection('CLEANERS').get().then((snapshot)=>{
        snapshot.docs.forEach((doc) => {
          let phonenum = doc.data().num
     phonenumarray.push(phonenum)

      })})
   console.log(phonenumarray)
  let cleanerno = phonenumarray[Math.floor(Math.random()*phonenumarray.length)]
  console.log(cleanerno)
  setcleaner(cleanerno)
   console.log("cleaner assigned",cleaner)

   

// TWILIO-PART TO SEND ROOM DETAILS TO CLEANER //



  //  await(axios.post("https://api.twilio.com/2010-04-01/Accounts/AC20c991be8036006d5666889a31f7a084/Messages.json", qs.stringify({
  //   Body: `Cleaning Request raised from : Room.no-${bdetails} ,Name-${name},Phone.no-${phone}`,
  //   From: '+12028001914',
  //   To: `+91${cleaner}`,
  // }), {
  //   auth: {
  //     username:'AC20c991be8036006d5666889a31f7a084' ,
  //     password: '5e8a6a259d12449ae0c5cdd89a242874',
  //   }
  // }));
  


//EMAIL-JS TO SEND CLEANER AND ROOM DETAILS TO CLEANER-HEAD//



      const templateParams = {
        name: name,
        bdetails: bdetails,
        reg:reg,
        phone:phone,
        cleaner:cleaner,
      };
     await emailjs.send('service_56epc1k','template_0y1tlh4', templateParams, 'user_UbTZE4srsbc0fArp4TvOG')
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });



//  FORM ADD TO DATABASE //

await db.collection('FORMDATA').add({NAME:name,REG:reg,PHONE:phone,BDETAILS:bdetails,DATE:d});

// // SUCCESS NOTIFICATION //

 store.addNotification({
  title: "Cleaning Update",
  message: "Your Cleaning request has been sent Successfully !",
  type: "success",
  insert: "top",
  container: "top-left",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 4000,
    onScreen: true
  }
});

 // REDIRECT TO THANK YOU PAGE //

setTimeout(()=>{history.push('/thankyuou')},4500)
      
    }








    return (

        <section>
            <ReactNotification/>
        <div className="credit-card-module">
          <div className="text-area-outer">
            <div className="text-area-inner">
              <form onSubmit={handlesend}>
                <div className="names"><h1>Request Your Facilitator</h1></div>
                <div className="half"> <h3>Your Name</h3><input type="text" value={name} onChange={(e)=>setname(e.target.value)}/></div>
      
                  <div className="half"><h3>Registration Number</h3><input type="text" style={{textTransform:"uppercase"}} value={reg} minlength={9} maxLength={9} onChange={(e)=>setreg(e.target.value)}   /></div>
      
                <div className="half"> <h3>Mobile Number</h3><input type="text"  value={phone} pattern="[6789][0-9]{9}" title="Please enter a valid phone number" onChange={(e)=>setphone(e.target.value)} /></div>
      
      
                <div className="full"><h3>Room.no with Block-Name</h3> <input type="text" style={{textTransform:"uppercase"}} value={bdetails} onChange={(e)=>setbdetails(e.target.value)}  /> </div>
                
                <button className="buttonsend" type="submit"> <RiSendPlaneFill style={{position: "absolute",marginLeft:'28px'}}/> Raise Ticket</button>
              </form>
          <a href="https://rzp.io/i/ZjcDTd7" target="_blank"><button style={{marginTop:'118px',border:'none',padding:'12px 74px',cursor:'pointer',marginLeft:'750px',borderRadius:'5px',zIndex:'4',position:'relative',backgroundColor:'#4cbeff',color:'white',fontWeight:'bold'}}>DONATE</button></a>
          </div>
          </div>
          
           <div className="purchase-total" style={{textAlign: 'center'}}>
          
               
               <div className="purchase-total-inner">
               <div className="container">
		<div className="receipt_box">
			<div className="head">
			</div>
			<div className="body">
				<div className="info">
					<div className="welcome">Hi, <span class="username">{name}</span></div>
					
				</div>
				<div className="cart">
					<div className="title">Your Details here</div>
					<div className="content">
						<ul className="cart_list">
							<li className="cart_item">
								<span className="index">1</span>
								<span className="name">Reg.no</span>
								<span className="price">{reg}</span>
							</li>
							<li className="cart_item">
								<span className="index">2</span>
								<span className="name">Room Details</span>
								<span className="price">{bdetails}</span>
							</li>
							<li className="cart_item">
								<span className="index">3</span>
								<span className="name">Phone.no</span>
								<span className="price">{phone}</span>
							</li>
						</ul>
						
					</div>
				</div>
			</div>
			<div  style={{display:'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center'}}className="foot">
				<h1 style={{fontSize:"11px",marginTop:"15px"}}>Thank You for using Hosteller Portal</h1>
        <ScrollAnimation animateIn="fadeIn"> <img style={{width:'139px',height:'80px'}}src={vit}/> </ScrollAnimation>
      
      
    

			</div>
		</div>
	</div>





               </div>
               
               </div>
           
        </div>
    
      </section>
    
    

    )
}

export default Form
