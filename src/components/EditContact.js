import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,useHistory,useParams } from 'react-router-dom'

import { toast } from "react-toastify";
const EditContact = () => {
  const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [number,setNumber]=useState("");
    const {id}=useParams();
    const dispatch=useDispatch("")
    const history=useHistory();
   const  contacts=useSelector(state=>state);
   const currentcontact=contacts.find(contact=>contact.id===parseInt(id));

    useEffect(()=>{
      if(currentcontact){
        setName(currentcontact.name)
        setEmail(currentcontact.email)
        setNumber(currentcontact.number)
      }
    },[currentcontact]);
   

     // CHECKING EXISTING 
   const handleSubmit=(e)=>{
      e.preventDefault();
  
     
      const checkEmail=contacts.find(
        contact=>contact.id !==parseInt (id) && contact.email===email && email
        );

      const checkNumber=contacts.find(contact=>contact.id !==parseInt (id) &&contact.number===parseInt( number) );
      const checkName=contacts.find(contact=>contact.id !==parseInt (id) &&contact.name===name && name);
  
      if(!email|| !name || !number){
        return toast.warning("please Fill all fields!")
      }
      if(checkEmail){
        return toast.error("this email already Exists!")
      }
      if(checkNumber){
        return toast.error("this number already Exists!")
      }
      if(checkName){
        return toast.error("this name already Exists!")
      }
    
  const data={
    id:parseInt(id) ,
    name,
    email,
    number,
  };
  dispatch({type:"UPDATE_CONTACT",payload:data})
  toast.success("student updates successfully!")
  history.push("/")
  
    };

    //⏩⏩ HTML PART 
    return (
        <div className="container">
          {currentcontact ?(
            <>
        <h1 className="display-3 my-5 text-center ">Edit contact {id}</h1>
      <div className=" row">
        <div className="col-md-6  shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group p-1">
              <input type="text" placeholder="Name" className="form-control" 
              
              value={name} onChange={e=>setName(e.target.value)}
              />
            </div>
            <div className="form-group p-1">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email} onChange={e=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group p-1">
              <input
                type="phone"
                placeholder="Number"
                className="form-control "
                value={number} onChange={e=>setNumber(e.target.value)}
              />
            </div>
            <div className="form-group p-1  ">
              <input
                type="submit"
                value="Update contact"
                className="btn btn-dark "
              />
              <Link to="/" className="btn  btn-danger  my-2 mx-2" >Cancle</Link>
            </div>
          </form>
        </div>
      </div>
      </>
          ):(
            <h1 className="display-3 my-5 text-center ">Student contact with id {id} not exists</h1>
          )}
    </div>
    )
}

export default EditContact
