import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'rsuite/dist/rsuite-no-reset.min.css';
//import 'rsuite/dist/rsuite.min.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);