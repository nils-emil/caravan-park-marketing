import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/inter/wght.css';
import '@fontsource-variable/jetbrains-mono/wght.css';
import MaterialsPage from './components/MaterialsPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MaterialsPage />
  </React.StrictMode>
);
