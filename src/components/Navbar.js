import React from 'react'
import './Navbar.css';
import { Form } from 'react-router-dom';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
  {/* LOGO */}
  <div className="logo">Top Cricketers</div>
  {/* NAVIGATION MENU */}
  <ul className="nav-links">
   
    {/* NAVIGATION MENUS */}
    <div className="menu">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li className="services">
        <a href="/">Services</a>
        {/* DROPDOWN MENU */}
        
      </li>
      <li>
        <a href="/">Pricing</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
      
    </div>
  </ul>
</nav>
    </div>
  )
}


export default Navbar;
