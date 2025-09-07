import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
  
  </StrictMode>
)
