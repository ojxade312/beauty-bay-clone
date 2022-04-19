// import { BrowserRouter } from "react-router-dom";

// import { createRoot } from "react-dom/client";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

// ✅ correct ID passed
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
// let root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
