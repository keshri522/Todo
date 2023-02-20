import React, { useState } from "react";
import "../App.css"
import Input from "./input";
import Heading from "./heading";
import ListItem from "./li";
import Popup from "./popup.";

function Todo(){
    let [arr,Setarr]=useState([]);
    let [find,Setfind]=useState("");
    let [events,Setevents]=useState(false)
    let [check,Setcheck]=useState('');

 


  
      
    function Changing(event){
        let {name,value}=event.target;
        Setfind(value);
       
      
    }
   function Trigger(){
    let InputallDate={id:new Date().getTime().toString(),name:find}
    Setarr(prevValue=>{
        return [...prevValue,InputallDate];
    })
Setfind("");
   }

  
    function Change(){
        Setevents(true);
    }
    function Change1(){
        Setevents(false);

    }
    function DeleteItems(index){
        console.log("deleted");
    
      Setarr((prevValue)=>{
        return prevValue.filter((item)=>{
            return  index!==item.id;
               
        })
      })

       }

function Got(event){
Setcheck(event.target.value);
console.log(check);

}
// function Update(){
// Setcheck(check);
// console.log(check);
// }

// function Update(index){
//     Setarr((prevValue)=>{
//         return prevValue.map((item)=>{
//         if(item.id==index){
//             item.name=check;
//         }
//         return item;
//         })
//     })
// }

function Update(index){
    let find=[...arr];
    find.map((item)=>{
        if(item.id==index){
            item.name=check;
        }
        return item;
    })
    Setarr(find);
}
    
    
    




    return(
        <div>
  <div className="row   ">
    <div className="container ">
       <Heading></Heading>
        <div className="col-md-6 text-center m-auto">
 
<div className="input-group mb-3">
<input   onChange={Changing} style={{backgroundColor:events ? "#a4b0be" : "#57606f"}} onMouseOver={Change} onMouseOut={Change1} type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" placeholder="Add Itmes" value={find}></input>
 
  <div className="input-group-append">
  <button onClick={Trigger} type="button" className="btn btn-outline-danger border" >Add</button>
  </div>
</div>
        </div>
   <ol>
   {arr.map((item)=>{
    return <ListItem list={item.name}  key={item.id} index={item.id}  Delete={DeleteItems}  print={Got}  update={Update}   >

    </ListItem>  
    
   })}

   </ol >
        </div>
  </div>
 

  
</div>
   
      

       

    )

 
}
export default Todo;