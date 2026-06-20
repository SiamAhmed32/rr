import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

const loadFonts = () => import("./fonts.js");

if ("requestIdleCallback" in window) {
  requestIdleCallback(loadFonts);
} else {
  setTimeout(loadFonts, 200);
}
