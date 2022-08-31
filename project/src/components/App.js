import React from 'react';
import Header from './landing/Header';
import Bed from './landing/Bed';
import InfoForm from './landing/InfoForm';
import LangSelect from './LangSelect';
import { TranslationContext, translations } from '../contexts/translation/TranslationContext';
import './App.css';

function App() {
  const [lang, setLang] = React.useState('en');

  return (
    <TranslationContext.Provider value={translations[lang]}> 
     <div className="App">
      <Header />
      <Bed />
      <InfoForm />
      <LangSelect onLangSelect={setLang} />
    </div>
    </TranslationContext.Provider>
  );
}

export default App;