import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Officers from "./Components/Officers";


// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <Router>
    <App />
    <Officers/>
  </Router>,
  document.getElementById('root')
);



