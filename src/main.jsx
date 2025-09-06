import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav.jsx'
import App from './firstpart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <App/>
  </StrictMode>
)
