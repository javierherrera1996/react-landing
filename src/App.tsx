import './index.css';

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <Hero />
    </div>
  );
};

export default App; 