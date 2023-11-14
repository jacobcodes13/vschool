import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"
import App from './App.jsx'
import { MovieProvider } from './context/MovieProvider'
import './css/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <MovieProvider>
        <App />
      </MovieProvider>
    </Router>
  </React.StrictMode>,
)
