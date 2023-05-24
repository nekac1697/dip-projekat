import React, { useCallback, useEffect, useState } from 'react';
import { BsChevronDown, } from 'react-icons/bs';
import {FaChevronCircleDown} from 'react-icons/fa';
import {GoSearch, GoBell} from 'react-icons/go'

import KorisnikMeni from '@/components/KorisnikMeni';
import MobileMenu from '@/components/MobileMenu';
import NavbarStavka from '@/components/NavbarStavka';


//da ostane crna boja navbara kad skrolujemo na dole
const ANIMATION_CATCHER = 66;

const Navbar = () => {
  const [showKorisnikMeni, setShowKorisnikMeni] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY >= ANIMATION_CATCHER) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleKorisnikMeni = useCallback(() => {
    setShowKorisnikMeni((current) => !current);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    //fixed is so it doesnt move z-40 so its above other things
    <nav className="w-full fixed z-40">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
        <img src="/images/logo.png" className="h-4 lg:h-7" alt="Logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarStavka label="Pocetna" active />
          <NavbarStavka label="Filmovi" />
          <NavbarStavka label="Serije" />
          <NavbarStavka label="Novo i popularno" />
          <NavbarStavka label="Omiljeno" />
          <NavbarStavka label="Sortiraj po jezicima" />
        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Trazi</p>
          <BsChevronDown className={`w-4 text-white fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <GoSearch className="w-6" />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <GoBell className="w-6" />
          </div>
          <div onClick={toggleKorisnikMeni} className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="" />
            </div>
            <BsChevronDown className={`w-4 text-white fill-white transition ${showKorisnikMeni ? 'rotate-180' : 'rotate-0'}`} />
            <KorisnikMeni visible={showKorisnikMeni} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
