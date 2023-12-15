import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENTID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <NextUIProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NextUIProvider>

  </Auth0Provider>
)
