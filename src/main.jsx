import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav.jsx'
import FLIP from './FLIP.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <FLIP/>
    <textarea name="" id=""><button>send</button></textarea>
  
  </StrictMode>
)
