import React from 'react';
import Button from './Button';
import heroImg from '../assests/hero.jpeg'

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white h-[80vh] flex flex-col justify-center items-center">
      <img src={heroImg} alt="hero image"/>
      <h1 className="text-5xl font-bold mb-4 ">iPhone 15</h1>
      <p className="mb-6 text-lg">From $799</p>
      <Button text="Buy" />
    </section>
  );
};

export default Hero;