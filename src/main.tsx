import "primereact/resources/themes/lara-light-blue/theme.css"; // ou outro tema
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css"; // opcional, para utilitários de layout
import "./styles/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
