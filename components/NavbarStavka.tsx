import React from 'react';

interface NavbarStavkaProps {
  label: string;
  active?: boolean;
}

const NavbarStavka: React.FC<NavbarStavkaProps> = ({ label, active }) => {
  return (
    <div className={active ? 'text-white cursor-default' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}>
      {label}
    </div>
  )
}

export default NavbarStavka;
