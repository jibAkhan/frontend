import React, { useState } from 'react';
import './Home.css';
import Flag from 'react-world-flags';

const Home = () => {
  const [selectedLanguage1, setSelectedLanguage1] = useState(null);
  const [selectedLanguage2, setSelectedLanguage2] = useState(null);

  const handleLanguageChange1 = (language) => {
    console.log(`Selected language 1: ${language}`);
    setSelectedLanguage1(language);
  };

  const handleLanguageChange2 = (language) => {
    console.log(`Selected language 2: ${language}`);
    window.location.replace('/app');
    setSelectedLanguage2(language);
  };

  const languages = [
    { name: 'English', code: 'gb' },
    { name: 'Spanish', code: 'es' },
    { name: 'French', code: 'fr' },
    { name: 'German', code: 'de' },
    { name: 'Chinese', code: 'cn' },
  ];

  return (
  <div className="absolute inset-0 -z-10 h-full w-full bg-black [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    <div className="relative">
      <div className="HomePage">
        <div className="content-container">
          <div className="heading-container">
            <h1 className="text-4xl font-bold text-purple-700 mb-4 text-center">Lasso</h1>
            <p className="text-lg text-gray-600 text-center">Learn a new language with ease.</p>
          </div>
          <div className="dropdown-container">
            <div className="max-w-sm mx-auto mr-4">
              <label htmlFor="language1" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">
                I want to learn
              </label>
              <select
                id="language1"
                className="dropdown-select"
                value={selectedLanguage1}
                onChange={(e) => handleLanguageChange1(e.target.value)}
              >
                <option value="">Choose a language</option>
                {languages.map(({ name, code }) => (
                  <option key={code} value={name} className="flex items-center justify-between">
                    {name} <Flag code={code} className="ml-2" />
                  </option>
                ))}
              </select>
            </div>
            <div className="max-w-sm mx-auto">
              <label htmlFor="language2" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">
                I can teach
              </label>
              <select
                id="language2"
                className="dropdown-select"
                value={selectedLanguage2}
                onChange={(e) => handleLanguageChange2(e.target.value)}
              >
                <option value="">Choose a language</option>
                {languages.map(({ name, code }) => (
                  <option key={code} value={name} className="flex items-center justify-between">
                    {name} <Flag code={code} className="ml-2" />
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;