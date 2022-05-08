import React from "react";
// import Home from './components/Home'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Branch from "./components/Branch";
import Footer from "./components/Footer";

import Final from "./components/Final";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
  <BrowserRouter>
    <Navbar />
   
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='Branch' element={<Branch/>} /> */}
      <Route path='Final' element={<Final/>} />
      
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}
