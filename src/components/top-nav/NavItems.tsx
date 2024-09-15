import React from 'react';

const NavItems: React.FC = () => {
  return (
    <div className="ml-4 flex space-x-4">
      <a href="/home" className="hover:underline">Home</a>
      <a href="/about" className="hover:underline">Bug Reports</a>
      <a href="/services" className="hover:underline">Feedback</a>
      <a href="/contact" className="hover:underline">Community Analtyics</a>
      <a href="/contact" className="hover:underline">Settings</a>
    </div>
  );
};

export default NavItems;