import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav.jsx'
import FLIP from '../components/FLIP.jsx'
import DTTMSDashboard from '../components/sidebar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
<DTTMSDashboard/>
  
  
  </StrictMode>
)
