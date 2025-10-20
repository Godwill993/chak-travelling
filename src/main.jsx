import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav.jsx'
import FLIP from './FLIP.jsx'
import DTTMSDashboard from './sidebar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
<DTTMSDashboard/>
  
  
  </StrictMode>
)
