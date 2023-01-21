import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';


// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);



