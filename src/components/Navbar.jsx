import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
            <Link to="/" className="navbar navbar-brand ml-3 p-3">React Contact Book</Link>
            <Link to="/Add" className="navbar navbar-brand ml-3 p-3  me-auto">Add Contact</Link>
            <form className="d-flex">
        <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
       </nav>
       </>
    )
}

export default Navbar
