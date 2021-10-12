// import React from 'react'
// import{useState,useEffect} from 'react'
// import{useSelector} from 'react-redux'
// import{db} from './Firebase'


// function Userformedit() {
//     const user = useSelector((state)=>state.user.value)
//     const[maparray,setmaparray]=useState([])
//     const[refresh,setrefresh]=useState(false)

// useEffect(() => {
//     const queryarray=[]
//      db.collection('FORMDATA').where('USER','==',user.uid).get().then((sanpshot)=>{
//          sanpshot.docs.forEach((doc)=>{
//              let appendobject={...doc.data(),DOCID:doc.id}
//              queryarray.append(appendobject)
//          })
//      })
//       setmaparray(queryarray)  
//     }, [refresh])

// console.log(maparray)
//     return (
//         <div>
//            {maparray.length>0?( <div>
//             {maparray.map((item)=>{
//              return(<> <h1>{item.NAME}</h1>
//              <h1>{item.DATE}</h1>
//        <button onClick={async()=>{
// if(window.confirm("Do you really want to Update status to completed?")){
//     await db.collection("FORMDATA").doc(item.DOCID).update({
//         COMPLETED: true
//     });

//     setrefresh(!refresh)
// }else{
// console.log("operation aborted")
// }


//        }}>STATUS UPDATE</button>
                
                
//                 </>)

//          })}
            

//             </div>):(<h1>NO ACTIVE SUBMISSIONS..COMEBACK LATER</h1>)}
          
         
            
            
        
//         </div>
//     )
// }

// export default Userformedit
