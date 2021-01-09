import React,{ useState } from 'react';

import NavBar from "./navbar";
import AdminSide from "../pages/admin_side";
import ClientSide from "../pages/client_side";

const Body = () => {
  const [clientSide, setClientSide] = useState(false);
  const [adminSide, setAdminSide] = useState(false);
  return (
    <>      
      {/* Navbar */}
      <NavBar
        setClientSide={setClientSide}
        setAdminSide={setAdminSide}
      />
      
      {/* client side */}
      {clientSide ? <ClientSide /> : null}   

      {/* admin side */}
      {adminSide?<AdminSide />:null} 
    </>
  );
};

export default Body;
