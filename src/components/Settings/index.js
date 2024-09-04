
import React from 'react';
import { useLanguage } from '../LanguageContext';
import './index.css';

function Settings() {
  const { language, handleLanguageChange } = useLanguage();

  const handleChange = (event) => {
    handleLanguageChange(event.target.value);
  };

  return (
    <div className="settings-container">
      <h2 className="main-heading">Settings</h2>
      <label className="label-element" htmlFor="language">Select Language:</label>
      <select id="language" value={language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="ru">Russian</option>
        <option value="es">Spanish</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  );
}

export default Settings;
