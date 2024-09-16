
import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="ENTER YOUR CLIENT ID">
    <SoftUIControllerProvider>
      <App />
    </SoftUIControllerProvider>
      </GoogleOAuthProvider>
  </BrowserRouter>
);
