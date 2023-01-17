import {setCookie} from '../helpers/cookies';

import '../styles/components/languageselector.sass';

const languages = [
    {id: 'en', title: 'English'},
    {id: 'pt', title: 'Português'}
]

const LanguageSelector = ({lang, setLang}) => {
  const handleLangueSelected = (e) => {
    e.preventDefault();

    const val = e.target.value;
    if(val != lang) { 
      setLang(val);
      setCookie('lang', val, 2);
    }
  } 

  return (
    <select id="languages-container" onChange={e => handleLangueSelected(e)} defaultValue={lang}>
        {
            languages.map(language => <option key={language.id} className="lang-option" value={language.id}>{language.title}</option>)
        }
    </select>
  )
}

export default LanguageSelector