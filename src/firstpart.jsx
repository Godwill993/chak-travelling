// App.jsx or ThemeToggle.jsx
import React, { useEffect, useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light'); // default is light

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.className = ''; // clear any existing classes
    document.body.classList.add(`${theme}-mode`);
  }, [theme]);

  return (
    <div>
     
      <button onClick={toggleTheme}>
        
      </button>
    </div>
  );
};

export default App;
