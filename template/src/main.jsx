import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const webData = {
  title: "{TITLE}",
  description: "{DESCRIPTION}",
  phone: "{PHONE}",
  address: "{ADDRESS}"
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App webData={webData} />
  </React.StrictMode>,
)
