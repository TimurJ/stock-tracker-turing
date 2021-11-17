import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/stock-tracker-turing'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
