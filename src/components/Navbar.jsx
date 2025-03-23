import { useState } from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css' //  Import Bootstrap's CSS in Your Project
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; //  Import Bootstrap's JS in Your Project

function Navbar() {
  

  return (
    <>
      

      {/* <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" style={{ backgroundColor: 'black' }}> */}

      {/* <nav className="navbar navbar-expand-lg navbar-dark "  style={{ backgroundColor: 'black' }}> */}

      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black' }}>

  <div className="container-fluid">
    <a className="navbar-brand" href="#">BESTBID.com</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link  text-white active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item text-black" href="#">Action</a></li>
            <li><a className="dropdown-item text-black" href="#">Another action</a></li>
            <li><hr className="dropdown-divider text-black"/></li>
            <li><a className="dropdown-item text-black" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white disabled" aria-disabled="true">Disabled</a>
        
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      
    </>
    
    
  )
}

export default Navbar
