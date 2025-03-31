import './index.css';

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-neutral-900">
        <Header />
        <Hero />
      </div>
    </LanguageProvider>
  );
};

export default App; 