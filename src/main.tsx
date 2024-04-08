import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/_reset.scss";
import "./styles/_typography.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter basename="punk-api">
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
