import React from 'react';

const Button = ({ text }) => {
  return (
    <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
      {text}
    </button>
  );
};

export default Button;