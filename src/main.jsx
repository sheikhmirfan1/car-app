import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './components/Home.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRouter />
    <App />
  </BrowserRouter>
);
