import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import EventBasic from './EventBasic';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventBasic type="date" />
  </React.StrictMode>
);

reportWebVitals();
