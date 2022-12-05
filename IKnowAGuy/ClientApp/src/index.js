import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

createRoot(document.getElementById("root")).render(
    <BrowserRouter basename={baseUrl}>
        <App />
    </BrowserRouter>
);
