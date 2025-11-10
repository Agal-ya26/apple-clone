import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />

      <Hero
        title="iPad Pro"
        description="Supercharged with M2 chip."
        imageUrl="https://www.apple.com/v/ipad/home/ab/images/overview/hero/ipad_pro__e6t3z8o2iyg_large.jpg"
      />

      <Section
        title="MacBook Air"
        description="Light. Speed."
        imageUrl="https://www.apple.com/v/mac/home/ab/images/overview/hero/macbook_air__b141k7hu4usg_large.jpg"
      />

      <Footer />
    </div>
  );
}

export default App;