import React from 'react'
import {db} from './Firebase'
import{useState,useEffect} from 'react'




function Menu() {

    const[menu,setmenu]=useState()
    const[block,setblock]=useState("A")
    const[breakfast,setbreakfast]=useState([])
    const[lunch,setlunch]=useState([])
    const[dinner,setdinner]=useState([])

  useEffect(async () =>{
    const menudata= (await db.collection('MENU').doc(block).get()).data()
   setmenu(menudata)
   
},[block])





    return (<div>
  {!menu?<h1>Loading...</h1>:<h1>Now you can Query</h1>}
        </div>
    )
}

export default Menu
