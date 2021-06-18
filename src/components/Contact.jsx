import React from 'react'
import './cont.css';

const Contact = () => {
    const contact=()=>{
        document.getElementById('showme').style.display='block';
    }
    const close=()=>{
        document.getElementById('showme').style.display='none';
    }
    const refresh=()=>{
        window.location.reload(false);
    }

    return (
        <>
        <div className="main_div">
        <h1 className="text-center">Contact   Book</h1>
        <button className="btn btn-outline-primary btn-center center m-2 " onClick={contact} >Add Contact</button>
        <button className="btn btn-outline-primary btn-center center " onClick={refresh} >Refresh</button>
        <div className="displayshow" id="showme">
        <div className="contact" >
           <h3>Add Contact</h3>
           <hr />
           <label htmlFor=""> Name</label>
           <input type="text" placeholder="Enter the name" autoComplete="of" />
           <label htmlFor="">Contact number</label>
           <input type="number" placeholder="Enter the number" autoComplete="of" />
           <label htmlFor="">city</label>
           <input type="text" placeholder="Enter the city" autoComplete="of"/>
           <label htmlFor="">country</label>
           <input type="text" placeholder="Enter the country" autoComplete="of" />
           <div className="main_btn">
           <button className="btn btn-danger m-1 " onClick={close}>Close</button>
           <button className="btn btn-danger m-1 " >Delete</button>
           <button className="btn btn-success m-1"  >Update</button>
           </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Contact
