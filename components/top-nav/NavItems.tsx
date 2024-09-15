import React from 'react'

const NavItems: React.FC = () => {
  return (
    <div className="ml-4 flex space-x-4">
      <a href="/home" className="hover:underline">Home</a>
      <a href="/about" className="hover:underline">About</a>
      <a href="/services" className="hover:underline">Services</a>
      <a href="/contact" className="hover:underline">Contact</a>
    </div>
  );
};

export default NavItems;