import React from 'react';

const NavItems: React.FC = () => {
  return (
    <nav className="pl-4">
      <ul className="flex space-x-4">
        <a href="/home" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">Bug Reports</a>
        <a href="/services" className="hover:underline">Feedback</a>
        <a href="/contact" className="hover:underline">Community Analytics</a>
        <a href="/contact" className="hover:underline">Settings</a>
      </ul>
    </nav>
  );
};

export default NavItems;