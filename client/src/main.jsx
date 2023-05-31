import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App";
import { BrowserRouter } from "react-router-dom";
//estilos de Material UI
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* CssBaseline sirve para que la pagina se formate de manera correcta */}
      <CssBaseline />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
