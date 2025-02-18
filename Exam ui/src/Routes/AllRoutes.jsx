import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Details from "../pages/Details"



const AllRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product/:id" element={<Details/>}/>
      </Routes>
    )
};


export default AllRoutes;