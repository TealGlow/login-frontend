import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Outlet }  from "react-router-dom";
import Navbar from './partials/Navbar';

function Layout(){
  return(
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
