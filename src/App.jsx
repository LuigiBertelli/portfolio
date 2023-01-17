import { useState } from 'react';

import LanguageSelector from './components/LanguageSelector';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import { getCookie } from './helpers/cookies';

import './styles/components/app.sass';

function App() {
  const [lang, setLang] = useState(getCookie('lang') || 'en');

  return (
    <div id="portfolio">
      <LanguageSelector {...{lang, setLang}}/>
      <h1>Luigi Ferreira Bertelli</h1>
      <Sidebar lang={lang} />
      <MainContent lang={lang} />
    </div>
  )
}

export default App
