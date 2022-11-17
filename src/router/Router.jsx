
import React, { useState, useEffect,createContext  } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Builder from "../components/Builder/Builder";
import Receipt from "../components/Receipt/Receipt";
export const contexto=createContext({})

const Router = () => {
  const [listaHamburguesas , setListaHamburguesas]=useState([])
 

  return (
    <contexto.Provider
    value={{
      listaHamburguesas,
      setListaHamburguesas
    }}
    > 
    <BrowserRouter>
     
      <Routes>
       
          <Route path="/" element={<Builder/>} /> 
          <Route path="/receipt" element={<Receipt/>} /> 
        
      </Routes>
    </BrowserRouter>
    </contexto.Provider>
  );
};

export default Router;
