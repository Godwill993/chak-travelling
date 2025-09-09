
import './Nav.css'
import React, { useEffect, useState } from 'react';

function Nav(){
     const [theme, setTheme] = useState('light'); // default is light
    
      const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
      };
    
      useEffect(() => {
        document.body.className = ''; // clear any existing classe
        document.body.classList.add(`${theme}-mode`);
      }, [theme]);





    return(
        <nav>
            <img className='logo' src="/src/assets/CHAK-LOGO.png" alt="" />
            <div className="nav-links">
                <li>HOME</li>
                <li>SERVICES</li>
                <li>CARGO</li>
                <li>ARGENCIES</li>
            </div>
            <div className="HAM">
                <span className='hamm'  style={{
    backgroundColor: theme === 'dark' ? '#fff' : '#222',
    
  }}
></span>
                <span  className='hamm'  style={{
    backgroundColor: theme === 'dark' ? '#fff' : '#222',
  
  }}
></span>
                <span  className='hamm'  style={{
    backgroundColor: theme === 'dark' ? '#fff' : '#222',
    
  }}
></span>

            </div>
            <div className="jtc">
                <div className='system-mode'>
     
      <button onClick={toggleTheme}>change StrictMode </button>
      
    </div>
            </div>
            
         
        </nav>

    )
} 

export default Nav;