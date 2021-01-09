import React from "react";
import './style.css';

const Navbar = ({ setClientSide, setAdminSide }) => {
    const clientSide = () => {
      setClientSide(true);
      setAdminSide(false);
    }
    const adminSide = () => {
      setClientSide(false);
      setAdminSide(true);
    }
  return (
    <div>
      <div className="mynav">
  <ul>
    <li className="logo">Task 8</li>
    <li onClick={()=>clientSide()} className="items">
      <a href="#">Client Side</a>
    </li>
    <li onClick={()=>adminSide()} className="items">
      <a href="#">Admin Side</a>
    </li>    
    <li className="btn">
      <a href="#">
        <i className="fas fa-bars" />
      </a>
    </li>
  </ul>
</div>

    </div>
  );
};

export default Navbar;
