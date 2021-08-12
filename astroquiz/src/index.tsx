import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {QuizProvider} from "./Contexts/QuizContext"

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
    <Router>
    <App />
    </Router>
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
