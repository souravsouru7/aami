import React from 'react';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 py-4">
        <Hero />
        <About />
      </div>
    </main>
  );
}

export default App;