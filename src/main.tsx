import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContactProvider } from "./contexts/ContactContext";
import { UserProvider } from "./contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ContactProvider>
          <App />
        </ContactProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
