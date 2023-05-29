import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

import { createRoot } from 'react-dom/client';
import './styles/styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
