import React from 'react';
import Menu from './components/Menu';
import Settings from './components/Settings';
import { LanguageProvider } from './components/LanguageContext';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <Settings />
        <Menu />
      </div>
    </LanguageProvider>
  );
}

export default App;