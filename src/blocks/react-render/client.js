import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';

window.addEventListener('load', () => {

  const reactDivs = document.querySelectorAll('.gtxb5_reactRender');

  if(!reactDivs) return null;

  reactDivs.forEach(div => {

    const root = ReactDOM.createRoot(div);

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

  })


});