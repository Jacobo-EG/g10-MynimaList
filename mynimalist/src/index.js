import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {TaskContextProvider} from './context'
import useLists from "./hooks"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <TaskContextProvider>
        <App />
  </TaskContextProvider>
);

