import React, { Suspense } from "react";
import "./assets/scss/style.scss";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"; // Use BrowserRouter instead of HashRouter
import Loader from "./layouts/loader/Loader";
import { Auth0Provider } from '@auth0/auth0-react';

require('dotenv').config();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-n5mwu8nfvjzxhvj6.us.auth0.com"
    clientId="xQwOKCZuzzhQTuhMTDXDEwtvovl4I9RH"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Auth0Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();