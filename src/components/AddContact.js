import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
// import { Link } from 'react-router-dom'
const AddContact = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [number,setNumber]=useState("");


  const contacts=useSelector((state)=>state)
  const dispatch=useDispatch("")
  const history=useHistory();

  const handleSubmit=(e)=>{
    e.preventDefault();

    // CHECKING EXISTING 
    const checkEmail=contacts.find(contact=>contact.email===email && email);
    const checkNumber=contacts.find(contact=>contact.number===parseInt( number) );
    const checkName=contacts.find(contact=>contact.name===name && name);

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
  id:contacts[contacts.length - 1].id +1 ,
  name,
  email,
  number,
};
dispatch({type:"ADD_CONTACT",payload:data})
toast.success("student added successfully!")
history.push("/")

  };
  
  return (
    <div className="container">
        <h1 className="display-3 my-5 text-center ">Add contact</h1>
      <div className=" row">
        <div className="col-md-6  shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group p-1">
              <input type="text" placeholder="Name"
               className="form-control" value={name} onChange={e=>setName(e.target.value)}/>
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
                type="number"
                placeholder="Number"
                className="form-control "
                value={number} onChange={e=>setNumber(e.target.value)}
              />
            </div>
            <div className="form-group p-1 ">
              <input
                type="submit"
                value="Add contact"
                className="btn btn-block btn-dark col-12"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
