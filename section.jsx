import React from 'react';
import Button from './Button';
import heroImg from '../assests/hero.jpeg';

const Section = ({ title, description, imageUrl, reverse }) => {
  return (
    <section className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} p-8 items-center`}>
      <img src={imageUrl} alt={title} className="w-1/2 h-auto" />
      <div className="w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <Button text="Learn more" />
      </div>
    </section>
  );
};

export default Section;