import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <>
  
  <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button
        data-mdb-collapse-init=""
        className="navbar-toggler"
        type="button"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Navbar brand */}
        <a className="navbar-brand mt-2 mt-lg-0" href="#">
          {/* <img
            src="https://external-preview.redd.it/d06j7pNLeuvJrQnZ0ufNCrb8xkl3WdxONaTwNUxR9VY.jpg?auto=webp&s=464c390787a3b66eab7ceb2885fa1f9851eab58d"
            height={50}
            alt="MDB Logo"
            loading="lazy"
          /> */}
        </a>
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <li className="nav-item">
            <NavLink className="nav-link" href="#" to={"/"}>
              Home
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link" href="#" to={"/signup"} >
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#" to={"/login"}>
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#" to={"/schemes"}>
              Schemes
            </NavLink>
          </li>
        </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
      {/* Right elements */}
      <div className="d-flex align-items-center">
        {/* Icon */}
        <a className="text-reset me-3" href="#">
        <i class="fa-brands fa-facebook"></i>
        </a>
        <a className="text-reset me-3" href="#">
        <i class="fa-brands fa-twitter"></i>
        </a>
        {/* Notifications */}
        <div className="dropdown">
          <a
            data-mdb-dropdown-init=""
            className="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            aria-expanded="false"
          >
            <i class="fa-brands fa-instagram"></i>
            {/* <span className="badge rounded-pill badge-notification bg-danger">
              15
            </span> */}
          </a>
         
        </div>
        {/* Avatar */}
        
      </div>
      {/* Right elements */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

    </div>
  )
}

export default Navbar
