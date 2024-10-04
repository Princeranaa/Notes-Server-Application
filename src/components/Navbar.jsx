import React from 'react'; 
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex  items-center w-screen justify-center bg-zinc-900 p-3 py-4 sticky top-0 z-10 shadow-[0_2px_12px_rgba(255,255,255,0.3)]">
      <div className="flex gap-x-10">
        <NavLink 
          to="/" 
          className=""
        >
          Home
        </NavLink>

        <NavLink 
          to="/pastes" 
          className=""
        >
          Pastes
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
