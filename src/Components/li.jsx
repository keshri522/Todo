import React from "react";
import '../App.css'
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
function ListItem(props){
    let [edit,SetEdit]=useState(false);
   
    function Edit(){
        SetEdit(true);
    }
  
   

return(
    <div>
    <div>

        <li style={{textDecoration:edit?"line-through" :"none"}} className="kk ">
            {props.list}
           
            <button onClick={(()=>{
                props.Delete(props.index);
            })}
            
             className="btn btn-success btn-sm m-2 rounded-right ">Delete</button>
            <button    onClick={Edit} className="btn btn-danger btn-sm m-2  rounded-right">Edit</button>

        </li>
    </div>
<Modal show={edit}>
    <Modal.Header>
        Edit todos
    </Modal.Header>
    <Modal.Body>
        <input type="text" name="" id="" placeholder={props.list} className="form-control" onChange={props.print} />
    </Modal.Body>
    <Modal.Footer>
        <button onClick={(()=>{
         props.update( props.index);
        SetEdit(false);
        })}
         className="btn btn-primary" >Update</button>
        <button 
        
        onClick={(()=>{
            SetEdit(false)
        })}  
        
     className="btn btn-success">Close</button>
       
    </Modal.Footer>
</Modal>
    </div>
)
}
export default ListItem