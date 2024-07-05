import React from 'react'
import ReactDOM from 'react-dom/client'
import 'aos/dist/aos.css'
import AOS from 'aos'
import App from './App.tsx'

AOS.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
