import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/AppRoutes.tsx'
import './index.css'
import { ContextProvider } from './contexts/ContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
        <AppRoutes />
    </ContextProvider>
  </React.StrictMode>,
)
