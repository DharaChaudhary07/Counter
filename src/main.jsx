import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Count from './Component/Counter/Counter.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Count />
  </StrictMode>,
)
