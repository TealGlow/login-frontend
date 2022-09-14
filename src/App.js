import React from 'react';
import { useState } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './partials/Navbar';
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NoPage from "./pages/NoPage";
import Loading from "./pages/Loading";
import Profile from "./pages/Profile";



function App() {
  /*const [data, setData] = React.useState([]);

  React.useEffect(() => {
  fetch(`http://localhost:4000/test`,
    {
      method: "GET",
      dataType:"json"
    })
    .then((response) => response.json())
    .then((actualData) => setData(actualData))
    .catch((err)=>{
      console.log(err.message);
    });
  }, []);*/


  /*axios.get('http://localhost:4000/')
  .then()
  .then()*/

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
