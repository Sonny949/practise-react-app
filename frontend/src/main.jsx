import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";
// import dotenv from "dotenv"


ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain="dev-s9kzjaeb.us.auth0.com"
        clientId='c2WWblZYgi1QoKZ5fHiU0ASX2BWCWOJz'
        redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>
)
