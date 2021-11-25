// Importamos React
import React from 'react';
import ReactDom from 'react-dom';

// * Importamos elementos Redux
// ...

// * Importamos componente principal
import App from './components/App';

// * Importamos hojas de estilo (SCSS / SASS / CSS)
// .... Bootstrap iría aquí
import './styles/css/index.css';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
