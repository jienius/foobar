"use client";
import 'firebaseui/dist/firebaseui.css'
import { useContext, useState } from "react";
import Image from "next/image";
import { AuthContext } from '@/context/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth'

export default function Header() {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [expandMenu, setExpandMenu] = useState<boolean>(false);

  const handleMenuClick = () => {
    setExpandMenu(!expandMenu);
  }

  const handleSignInOrSignOut = () => {
    console.log("?")
    console.log(user)
    if (user) {
      signOut(auth);
    } else {
      router.push('sign-in');
    }
  }

  return (
    <>
      <header className="p-5 absolute w-full" style={{ height: "90px" }}>
        <nav className="flex items-center">
          <Image className="inline" src="/icon.png" alt='logo' width={40} height={40} />
          <div className="grow">
            <div className="float-right space-x-5 text-brand-yellow font-bold text-sm hidden md:block">
              <a className="cursor-pointer hover:text-white">Listings</a>
              <a className="cursor-pointer hover:text-white">Services</a>
              <a className="cursor-pointer hover:text-white">Agents</a>
              <a className="cursor-pointer hover:text-white">Culture</a>
              <a className="cursor-pointer hover:text-white">Contact</a>
              <a className="text-white bg-brand-yellow rounded-lg px-3 py-2 hover:bg-white hover:text-brand-yellow cursor-pointer" onClick={handleSignInOrSignOut}>{user ? 'Sign Out' : 'Sign In'}</a>
            </div>
            <Image className='cursor-pointer float-right md:hidden' src={"/images/menu.svg"} onClick={handleMenuClick} alt='menu' width='25' height='25' />
          </div>
        </nav>
      </header>
      <div className='fixed w-full p-5 space-y-5 text-brand-yellow font-bold text-sm md:hidden flex flex-col bg-white transition-transform z-10' style={{ transform: expandMenu ? "none" : "translateX(100%)" }}>
        <div className="flex items-center">
          <img className="inline" src="/icon.png" style={{ width: "40px", height: "40px" }} />
          <div className="grow">
            <Image className='cursor-pointer float-right' src={"/images/cross.svg"} onClick={handleMenuClick} alt='close' width='18' height='18' />
          </div>
        </div>
        <a className="cursor-pointer block hover:text-black mx-auto">Listings</a>
        <a className="cursor-pointer block hover:text-black mx-auto">Services</a>
        <a className="cursor-pointer block hover:text-black mx-auto">Agents</a>
        <a className="cursor-pointer block hover:text-black mx-auto">Culture</a>
        <a className="cursor-pointer block hover:text-black mx-auto">Contact</a>
        <a className="text-white block bg-brand-yellow rounded-md px-2 py-1 hover:bg-white border-2 border-brand-yellow hover:text-brand-yellow cursor-pointer mx-auto" onClick={handleSignInOrSignOut}>{user ? 'Sign Out' : 'Sign In'}</a>
      </div>
    </>
  );
}