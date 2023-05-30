import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
