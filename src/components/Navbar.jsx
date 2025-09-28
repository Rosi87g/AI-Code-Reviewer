import React from 'react'
import { BrainCircuit, Sun } from 'lucide-react';

// This function returns a Navbar component
const Navbar = () => {
  // Return a JSX element
  return (
    <>
      <div className="nav flex items-center justify-between h-[90px] bg-zinc-900" style={{padding:"0px 150px"}}>
        <div className="logo flex items-center gap-[10px]">
          <BrainCircuit size={30} color='#ecfb18ff'/>
          <span className="text-2xl font-bold text-white ml-2">ReviewBot</span>
        </div>
      </div>
    </>
  )
}

export default Navbar