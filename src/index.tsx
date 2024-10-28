import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'react-tooltip/dist/react-tooltip.css';
import { Routes } from './Routes';
import { Flowbite } from 'flowbite-react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Flowbite>
      <Routes />
    </Flowbite>
  </React.StrictMode>,
);
