import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Cart } from './context.jsx';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Cart>
    <App />
    </Cart>
    </BrowserRouter>
    <ToastContainer/>
  </StrictMode>,
)
