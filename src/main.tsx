import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import AppProvider from './contexts/app-context';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {routes} from './router';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
)
