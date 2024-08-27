import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Cart } from './context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Cart>
    <App />
    </Cart>
    </BrowserRouter>
  </StrictMode>,
)
