'use client';

import NavLinks from "@/app/ui/home/nav-links";
import Logo from "@/app/ui/home/logo";
import MenuIcon from '@/icons/menu.svg';
import Link from "next/link";
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-300 px-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo image="/logo.png" title="Fisika Seru" />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="hidden md:flex">
            <Link href="#" className="text-gray-800 bg-blue-400 hover:bg-blue-500 font-medium rounded-md text-sm lg:text-lg mx-2 px-4 py-2 text-center border-2 border-blue-400">Daftar</Link>
            <Link href="#" className="text-gray-800  hover:bg-blue-400 font-medium rounded-md text-sm lg:text-lg mx-2 px-4 py-2 text-center border border-blue-400">Masuk</Link>
          </div>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon />
          </button>
        </div>
        <NavLinks isOpen={isOpen} />
      </div>
    </nav>
  );
}
