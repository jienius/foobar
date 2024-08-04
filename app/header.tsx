"use client";
import { useState } from "react";

export default function Header() {
  const [expandMenu, setExpandMenu] = useState<boolean>(false);

  const handleMenuClick = () => {
    setExpandMenu(!expandMenu);
  } 

  return (
    <>
    <header className="p-5 absolute w-full z-200">
        <nav className="flex items-center">
            <img className="inline" src="/icon.png" style={{width: "40px", height:"40px"}} />
            <div className="grow">
              <div className="float-right space-x-5 text-brand-yellow font-bold text-sm hidden md:block">
                  <a className="cursor-pointer hover:text-white">Listings</a>
                  <a className="cursor-pointer hover:text-white">Services</a>
                  <a className="cursor-pointer hover:text-white">Agents</a>
                  <a className="cursor-pointer hover:text-white">Culture</a>
                  <a className="cursor-pointer hover:text-white">Contact</a>
                  <a className="text-white bg-brand-yellow rounded-lg px-3 py-2 hover:bg-white hover:text-brand-yellow cursor-pointer">Sign In</a>
                </div>
                <div className="float-right cursor-pointer md:hidden " onClick={handleMenuClick}>
                  <span className='block bg-brand-yellow m-1 rounded-sm' style={{width: "25px", height: "3px"}}></span>
                  <span className='block bg-brand-yellow m-1 rounded-sm' style={{width: "25px", height: "3px"}}></span>
                  <span className='block bg-brand-yellow m-1 rounded-sm' style={{width: "25px", height: "3px"}}></span>
                </div>
            </div> 
        </nav>
        
    </header>
    <div className='fixed w-full p-5 space-y-5 text-brand-yellow font-bold text-sm md:hidden flex flex-col bg-white transition-transform z-100' style={{transform: expandMenu ? "none": "translateX(100%)"}}>
      <div className="flex items-center">
        <img className="inline" src="/icon.png" style={{width: "40px", height:"40px"}} />
        <div className="grow">
          <div className="cursor-pointer float-right grow-0" onClick={handleMenuClick}>
            <span className='block bg-black m-1 rounded-sm bg-brand-yellow' style={{width: "25px", height: "3px", transform: "translateY(8px) rotate(45deg)"}}></span>
            <span className='block bg-black m-1 rounded-sm opacity-0' style={{width: "25px", height: "3px"}}></span>
            <span className='block bg-black m-1 rounded-sm bg-brand-yellow' style={{width: "25px", height: "3px", transform: "translateY(-8px) rotate(-45deg)"}}></span>
          </div>
        </div>
      </div>
      <a className="cursor-pointer block hover:text-black mx-auto">Listings</a>
      <a className="cursor-pointer block hover:text-black mx-auto">Services</a>
      <a className="cursor-pointer block hover:text-black mx-auto">Agents</a>
      <a className="cursor-pointer block hover:text-black mx-auto">Culture</a>
      <a className="cursor-pointer block hover:text-black mx-auto">Contact</a>
      <a className="text-white block bg-brand-yellow rounded-md px-2 py-1 hover:bg-white border-2 border-brand-yellow hover:text-brand-yellow cursor-pointer mx-auto">Sign In</a>
    </div>
    </>
  );
}