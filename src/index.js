import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from "./AppContext";
import './Stylesheets/index.css';
import 'font-awesome/css/font-awesome.min.css';

import App from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>
);

 