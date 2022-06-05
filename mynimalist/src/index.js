import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {TaskContextProvider} from './context'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <TaskContextProvider>
        <App />
  </TaskContextProvider>
);

