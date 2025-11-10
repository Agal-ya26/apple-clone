import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-black text-white flex justify-between items-center p-4 cursor-pointer">
      <div className="text-xl font-bold  hover:text-blue-600" >Apple</div>
      <ul className="flex space-x-4  hover:text-blue-600" >
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>AirPods</li>
        <li>TV & Home</li>
        <li>Support</li>
      </ul>
    </nav>
  );
};

export default Nav;