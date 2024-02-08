import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Provider from './components/Provider.tsx'
import { Toaster } from "react-hot-toast"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import "./globals.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <ReactQueryDevtools />
      <Toaster />
      <App />
    </Provider>
  </React.StrictMode>,
)
