import React from 'react'
import ReactDOM from 'react-dom/client'

// APP COMPONENT
import App from './App.jsx'

// PROVIDER
import { Auth0Provider } from '@auth0/auth0-react'; // AUTH0
import { ChakraProvider } from '@chakra-ui/react' // CHAKRA UI

// REACT ROUTER PROVIDER
import { BrowserRouter } from 'react-router-dom'





ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    
  >
    <React.StrictMode>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Auth0Provider>

  ,
)
