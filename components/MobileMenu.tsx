import React from 'react';

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">
          Pocetna
        </div>
        <div className="px-3 text-center text-white hover:underline">
        Filmovi
        </div>
        <div className="px-3 text-center text-white hover:underline">
        Serije

        </div>
        <div className="px-3 text-center text-white hover:underline">
        Novo i najgledanije
        </div>
        <div className="px-3 text-center text-white hover:underline">
        Omiljeno
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Sortiraj po jezicima
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;
