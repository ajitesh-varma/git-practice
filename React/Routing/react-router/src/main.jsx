import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Master from './Component/Master.jsx'
import { BrowserRouter } from 'react-router-dom'
// import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Master/>
    </BrowserRouter>
  </StrictMode>,
)
