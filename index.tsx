import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import ExplorerSite from './components/ExplorerSite.js';

// VITE_SITE=explorer builds the public codebook explorer site (no coder).
const Root = import.meta.env.VITE_SITE === 'explorer' ? ExplorerSite : App;

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);