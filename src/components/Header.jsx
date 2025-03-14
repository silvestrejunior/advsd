'use client'
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="home" className="bg-[#33414E] shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Image
        src='/logos-santana-daufenbach-10.png'
        width={25}
        height={25}
        alt="Logo da advocacia"
        className="flex md:hidden"
        />
        <Image
        src='/logos-santana-daufenbach-09.png'
        width={80}
        height={25}
        alt="Logo da advocacia"
        className="hidden md:flex"
        />

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="text-white hover:text-gray-600">HOME</Link>
          <Link href="#atuacao" className="text-white hover:text-gray-600">ATUAÇÃO</Link>
          <Link href="#sobre" className="text-white hover:text-gray-600">SOBRE</Link>
          <Link href="#saibamais" className="text-white hover:text-gray-600">SAIBA MAIS</Link>
          <Link href="#contato" className="text-white hover:text-gray-600">CONTATO</Link>
        </nav>

        {/* Botão de Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu color="white" size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsOpen(false)}
      ></div>

      <aside
        className={cn(
          "fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 z-50 transform transition-transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2"
        >
          <X size={24} />
        </button>
        <nav className="flex flex-col space-y-4 mt-8">
          <Link onClick={()=>setIsOpen(false) } href="#" className=" hover:text-gray-600">HOME</Link>
          <Link onClick={()=>setIsOpen(false) } href="#atuacao" className=" hover:text-gray-600">ATUAÇÃO</Link>
          <Link onClick={()=>setIsOpen(false) } href="#sobre" className=" hover:text-gray-600">SOBRE</Link>
          <Link onClick={()=>setIsOpen(false) } href="#saibamais" className=" hover:text-gray-600">SAIBA MAIS</Link>
          <Link onClick={()=>setIsOpen(false) } href="#contato" className=" hover:text-gray-600">CONTATO</Link>
        </nav>
      </aside>
    </header>
  );
};

export default Header;
