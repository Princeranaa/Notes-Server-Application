import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Pastes from "./components/Pastes"
import ViewPastes from "./components/ViewPastes"



function App() {
  return (
    <div className="h-screen w-screen bg-zinc-890 overflow-x-hidden">
      <Routes>
        <Route path="/" element={<div>
          <Navbar/>
          <Home/>
        </div>} />
        
        <Route path="/pastes" element={
          <div>
           <Navbar/>
           <Pastes/>
        </div>
        
        }/>

        <Route path="/pastes/:id" element={<div>
          <Navbar/>
          <ViewPastes/>
        </div>}   />

      </Routes>
      
    </div>
  );
}

export default App;
