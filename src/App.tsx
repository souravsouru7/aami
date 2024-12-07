import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] flex items-center justify-center">
      <div className="container mx-auto px-12 py-4">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
