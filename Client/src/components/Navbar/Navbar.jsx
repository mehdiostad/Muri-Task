import React from 'react'
import "./Navbar.css"
const Navbar = () => {

  return (
   <div className="navbar">
     <div className="nav-left">
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>Sporten</li>
          <li>Merken</li>
          <li style={{fontWeight:"bold", color:"crimson"}}>Sale</li>
        </ul>
      </div>
     </div>
    <div className="nav-right">
      
      <input type="text" placeholder='Search...'/>
    
    </div>
   </div>
  )
}

export default Navbar